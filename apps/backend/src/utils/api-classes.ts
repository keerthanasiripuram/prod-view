class ApiResponse {
  data: any;
  success: boolean;

  constructor(data: any) {
    this.data = data;
    this.success = true
  }
}

class ApiError extends Error {
  statusCode: number;
  message: string;
  success: boolean;

  constructor(
    message: string,
    statusCode: number,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
  }
}

export { ApiResponse, ApiError };

