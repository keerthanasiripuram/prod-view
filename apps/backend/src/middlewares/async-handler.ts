const asyncHandler = (fn: Function) => async (
    req: any,
    res: any,
    next: Function
  ) => {
    try {
      await fn(req, res, next); // Execute the async function
    } catch (error) {
      next(error); // Pass the error to the next error handler
    }
  };
export default asyncHandler;