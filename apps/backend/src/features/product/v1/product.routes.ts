import express from "express";
import { getProducts } from "./product.controller.js";
import asyncHandler from "../../../middlewares/async-handler.js";

const router = express.Router();

router.get("/v1/get-products", asyncHandler(getProducts));

export default router;