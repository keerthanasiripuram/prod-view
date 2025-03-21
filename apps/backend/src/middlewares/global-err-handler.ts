import { StatusCodes } from 'http-status-codes';

const globalErrorHandler = (err:any, req:any, res:any, next:any) => {
    console.log(err)
    //these assigning are fr the errors vch are thrwn by pg-prmse , if we
    //could hve thrwn sme err then would hve all the dtls filled by
    //apierror cls
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || "Internal Server Error";
    
    res.status(statusCode).json({
      statusCode,
      message,
      errors: err.errors || [],//only gets filled vth valdtn errs usng zod
      success: false,
    });
  };
export default globalErrorHandler