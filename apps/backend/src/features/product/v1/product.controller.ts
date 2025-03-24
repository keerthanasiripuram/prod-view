import { StatusCodes } from "http-status-codes";
import { ApiResponse } from "../../../utils/api-classes.js";
import { getProductsService } from "./product.service.js"
import { Request, Response } from "express";
import { z } from 'zod';

const paginationInputSchema = z.object({
  page: z.string()
    .regex(/^[1-9]\d*$/, { message: 'Page must be a positive number' })
    .transform(Number)
    .refine(val => val >= 1, { message: 'Page must be at least 1' }),

  pageSize: z.string()
    .regex(/^[1-9]\d*$/, { message: 'PageSize must be a positive number' })
    .transform(Number)
    .refine(val => val >= 1 && val <= 10, { message: 'PageSize must be between 1 and 10' })
});

export const getProducts = async (req: Request, res: Response) => {
  const { page, pageSize } = paginationInputSchema.parse(req.query)
  const { products, totalCount } = await getProductsService(page, pageSize);
  res.status(StatusCodes.OK).send(new ApiResponse({ products, totalCount }));
};

