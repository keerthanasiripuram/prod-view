import {db } from "../../../config/db.js";
import { Product } from "./product.types.js";

export const getProductsRepository = async (page: number, pageSize: number):Promise<{products: Product[], totalCount: number }>  => {
  const offset = (page - 1) * pageSize;

  const products = await db.any('SELECT * FROM product LIMIT ${pageSize} OFFSET ${offset}', {pageSize, offset});

  const totalCountResult = await db.one('SELECT COUNT(*) FROM products');
  const totalCount = parseInt(totalCountResult.count, 10);

  return { products, totalCount };
};
