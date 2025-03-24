import { StatusCodes } from 'http-status-codes';
import { ApiError } from '../utils/api-classes.js';
import { z } from 'zod';

const globalErrorHandler = (error: any, req: any, res: any, next: any) => {

  //Validation errors
  if (error instanceof z.ZodError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Validation Error',
      errors: error.errors
    });
  }

  //custom errors
  if (error instanceof ApiError) {
    res.status(error.statusCode).json({
      error: error.message,
      success: error.success,
    });
  }

  //default error
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: "Internal Server Error",
    success: false,
  });
};

export default globalErrorHandler;