// import { ProductsResponseSchema, Product } from '../types/product.type';
import { Product,ProductsResponseSchema } from '@prodview/shared-types';
import { getAPI } from '../utils/api-client';
import ValidationError from '../utils/zod-err-class';

export const getProducts = async (page: number, pageSize: number): Promise<{ products: Product[]; totalCount: number }> => {
  const data = await getAPI<{ products: Product[]; totalCount: number }>(
    '/products/v1/get-products',
    { params: { page, pageSize } }
  );

  // Validate using Zod
  const result = ProductsResponseSchema.safeParse(data);
  if (!result.success) {
    throw new ValidationError('API response validation failed', result.error.errors);
  }

  return data;
};

