import express from 'express'
import cors from 'cors'
import productRoutes from './features/product/v1/product.routes.js'
import { checkDbConnection } from './config/db.js';
import { getEnv } from './utils/env.js';
import globalErrorHandler from './middlewares/global-err-handler.js';

const app = express();

const allowedOrigins =getEnv('ALLOWED_ORIGINS').split(',')
console.warn("origins",allowedOrigins)
app.use(
     cors({
          origin: function (origin: string | undefined, callback) {

               if (origin && allowedOrigins.indexOf(origin) !== -1 || !origin) {
                    callback(null, true);
               }
               else {
                    callback(new Error("Not allowed by CORS"));
               }
          },
     })
);

app.use(express.json());

const startServer = async () => {

     await checkDbConnection();

     app.use('/products', productRoutes);

     // Global Error Handler
     app.use(globalErrorHandler);

     const PORT = Number(getEnv('SERVER_PORT'));
     app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
     });
};
startServer()


