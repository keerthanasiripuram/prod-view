import { Product } from '../types/ProductType';
import { Card, CardContent, Grid, styled, Typography } from '@mui/material';

export const StyledCard = styled(Card)({
    padding: "20px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    width: "100%",
    height: "100%",
    transition: "0.3s",
    "&:hover": {
        transform: "scale(1.05)",
    },
});

type ProductGridProps = {
    products: Product[],
}


const ProductGrid = ({ products }: ProductGridProps) => {
    // if (isLoading) {
    //     return <Typography variant="h6">Loading...</Typography>; // Show loading message
    //   }
    return (
        <>
            {products?.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h5">{product.title}</Typography>
                            <Typography variant="h6">{product.category}</Typography>
                            <Typography variant="h6">${product.price}</Typography>
                            <Typography variant="h6">
                                Rating:{product.rating}
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
            ))}
        </>
    )
}

export default ProductGrid;