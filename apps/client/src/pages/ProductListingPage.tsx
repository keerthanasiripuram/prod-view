import { useCallback, useEffect, useState } from 'react'
// import { Product } from '../types/product.type';
import { Product } from '@prodview/shared-types';
import ProductGrid from '../components/ProductGrid';
import Pagination from '../components/Pagination';
import { getProducts } from '../services/product.services';
import { styled, Typography } from '@mui/material';
import ValidationError from '../utils/zod-err-class';
// import {LoadingIndicator} from '@prodview/shared-ui';
import {ErrorComponent, LoadingIndicator} from "@prodview/shared-ui"


const CenterDiv = styled('div')`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100vw;
margin:auto;
gap:20px;
`;

const ProductListingPage = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);

    // Pagination state
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(2);
    const [totalProducts, setTotalProducts] = useState<number>(0);

    // Function to handle page change
    const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    }, [setCurrentPage]);

    //function to load the products
    useEffect(() => {
        setIsLoading(true)
        getProducts(currentPage, pageSize)    
            .then((res) => {
                console.log(res.products)
                setProducts(res.products)
                setTotalProducts(res.totalCount)
            })
            .catch((err) => {
                console.log(err)
                if (err instanceof ValidationError) {
                    setError(`Validation failed: ${err.validationErrors.map((e: { message: string }) => e.message).join(', ')}`);
                } else {
                    setError(err.response.data.error)
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [currentPage]);

    if (isLoading) {
        // return <Typography variant="h6">Loading...</Typography>
        return <LoadingIndicator/>
    }

    if (error) {
        // return <Typography color="error">{error}</Typography>
        return <ErrorComponent error={error}/>
    }
 
    if (products.length === 0) {
        return <Typography>N products found</Typography>
    } else {
        return (
            <CenterDiv>
                <Typography variant="h4">Products</Typography>
                <ProductGrid products={products} />
                <Pagination
                    total={totalProducts}    
                    currentPage={currentPage}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                />
            </CenterDiv>
        )
    }
}

export default ProductListingPage;