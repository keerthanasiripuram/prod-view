import { getProductsRepository } from "./product.repo.js";
import { Product } from "./product.types.js";

export const getProductsService = async (page:number, pageSize: number): Promise<{ products: Product[], totalCount: number }> => {
  const { products, totalCount }: { products: Product[], totalCount: number } = await getProductsRepository(page, pageSize);
  const convertedProducts = products.map((product) => ({
    ...product,
    price: +product.price,
    rating: +product.rating,
  }));
  return { products: convertedProducts, totalCount: totalCount };
};
