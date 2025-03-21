// utils/errorHandler.ts
import { StatusCodes } from 'http-status-codes';

 class ApiResponse {
  statusCode: number;
  data: any;
  message: string;
  success: boolean;

  constructor(statusCode: number, data: any, message: string = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

 class ApiError extends Error {
  statusCode: number;
  errors: any[];
  success: boolean;

  constructor(
    message: string ,
    statusCode: number ,
    errors: any[] = [],
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.success = false;
  }
}

export { ApiResponse, ApiError };

