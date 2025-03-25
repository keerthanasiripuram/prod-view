// import { z } from 'zod';

// // Define product schema
// const ProductSchema = z.object({
//   id: z.number(),
//   title: z.string(),
//   description: z.string(),
//   category: z.string(),
//   price: z.number(),
//   rating: z.number(),
//   stock: z.number(),
//   image: z.string(),
// });

// // Define response schema
// const ProductsResponseSchema = z.object({
//   products: z.array(ProductSchema),
//   totalCount: z.number(),
// });

// export type Product = z.infer<typeof ProductSchema>;

// export { ProductSchema, ProductsResponseSchema }