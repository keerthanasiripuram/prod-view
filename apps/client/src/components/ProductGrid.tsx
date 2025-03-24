import { Product } from '../types/product.type';
import { Card, CardContent, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const StyledCard = styled(Card)({
  padding: "20px",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  width: "100%",
  height: "350px",
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const StyledImage = styled('img')`
  max-width: 100%;
  height: '200px';
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

type ProductGridProps = {
  products: Product[],
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <Grid container spacing={12}
      justifyContent="center"
      alignItems="center">
      {products?.map((product, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <StyledCard>
            <CardContent>
              <StyledImage
                src={`http://localhost:3000/${product.image}`}
                alt={product.title}
              />
              <Typography variant="h5">{product.title}</Typography>
              <Typography variant="h6">Category: {product.category}</Typography>
              <Typography variant="h6">${product.price}</Typography>
              <Typography variant="h6">Rating: {product.rating}</Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductGrid;