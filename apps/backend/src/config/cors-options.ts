import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/api-classes.js";
import { getEnv } from "../utils/env.js";

const allowedOrigins = getEnv('ALLOWED_ORIGINS').split(',');
const corsOptions = {
     origin: function (origin: string | undefined, callback: (err: ApiError | null, success?: boolean) => void) {

          if (origin && allowedOrigins.indexOf(origin) !== -1 || !origin) {
               callback(null, true);
          }
          else {
               callback(new ApiError("CORS Error: Origin not allowed", StatusCodes.FORBIDDEN))
          }
     },
}

export default corsOptions