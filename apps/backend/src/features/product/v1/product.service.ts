import { StatusCodes } from "http-status-codes";
import { ApiError } from "../../../utils/api-classes.js";
import { getProductsRepository } from "./product.repo.js"
import { Product } from "./product.types.js";

export const getProductsService = async (page: number, pageSize: number):Promise<{products: Product[], totalCount: number }>   => {
  const { products, totalCount } = await getProductsRepository(page, pageSize);
  if (!products || products.length === 0) {
        throw new ApiError("No products found", StatusCodes.NOT_FOUND);
      }
  return { products, totalCount };
};
