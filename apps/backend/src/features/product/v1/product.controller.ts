import { StatusCodes } from "http-status-codes";
import { ApiResponse } from "../../../utils/api-classes.js";
import { getProductsService } from "./product.service.js"
import { Request,Response} from "express";

export const getProducts = async (req: Request, res: Response) => {
    const { page = 1, pageSize = 2 } = req.query;

    const parsedPage = parseInt(page as string, 10);
    const parsedPageSize = parseInt(pageSize as string, 10);

    const { products, totalCount } = await getProductsService(parsedPage, parsedPageSize);

    res.json(new ApiResponse(StatusCodes.OK,{products,totalCount}, "Products retrieved successfully"));
};

 