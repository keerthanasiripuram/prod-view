import { useEffect, useState } from 'react'
import { Product } from '../types/ProductType';
import ProductGrid from '../components/ProductGrid';
import Pagination from '../components/Pagination';
import { getProducts } from '../services/productServices';
import { Typography } from '@mui/material';

const ProductListingPage = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(2);
    const [totalProducts, setTotalProducts] = useState(0);

    const fetchProducts = async (page: number) => {
        setIsLoading(true);
        try {
            const response = await getProducts(page, pageSize);
            console.log(response)
            setProducts(response.data.products);
            setTotalProducts(response.data.totalCount);
        } catch (error: any) {
            setError(error?.response.request.statusText)
            console.error('Error fetching products:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Function to handle page change
    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);
    if(isLoading)
    {
        return(
            <Typography variant="h6">Loading...</Typography>
        )
    }
    return (
        <>
            {error && <Typography color="error">{error}</Typography>}
            {!error && products.length === 0 && <Typography>No products found</Typography>}
            {!error && (
                <>
                    <ProductGrid products={products} />
                    <Pagination
                        total={totalProducts}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                    />
                </>
            )}

        </>
    )
}
export default ProductListingPage;