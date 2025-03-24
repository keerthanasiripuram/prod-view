const asyncHandler = (fn: Function) => async (
  req: any,
  res: any,
  next: Function
) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    next(error);
  }
};
export default asyncHandler;