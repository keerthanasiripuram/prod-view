import { z } from 'zod';

// Define product schema using Zod
export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  rating: z.number(),
  stock: z.number(),
  image: z.string(),
});

// Infer the TypeScript type from the schema
export type Product = z.infer<typeof ProductSchema>;

// Define response schema
export const ProductsResponseSchema = z.object({
  products: z.array(ProductSchema),
  totalCount: z.number(),
});

export type ProductsResponse = z.infer<typeof ProductsResponseSchema>;
