import { db } from "../../../config/db.js";
// import { Product } from "./product.types.js";
import { Product } from '@prodview/shared-types';
export const getProductsRepository = async (page: number, pageSize: number): Promise<{ products: Product[], totalCount: number }> => {
  const offset = (page - 1) * pageSize;
  const products = await db.any<Product>('SELECT *  FROM products LIMIT ${pageSize} OFFSET ${offset}', { pageSize, offset });
  const totalCountResult = await db.one<{ count: number }>('SELECT CAST(COUNT(*) AS INTEGER) AS count FROM products');
  return { products, totalCount: totalCountResult.count };
};
