import express from 'express'
import cors from 'cors'
import path from "path";
import productRoutes from './features/product/v1/product.routes.js'
import { connectToDb } from './config/db.js';
import { getEnv } from './utils/env.js';
import globalErrorHandler from './middlewares/global-err-handler.js';
import { ApiError } from './utils/api-classes.js';
import { StatusCodes } from 'http-status-codes';
import corsOptions from './config/cors-options.js';
import { fileURLToPath } from 'url';
import { staticServerOptions } from './config/static-server.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads"), staticServerOptions));

const startServer = async () => {
     await connectToDb();

     //routes
     app.use('/products', productRoutes);

     //Invalid route
     app.use('*', (req, res, next) => {
          next(new ApiError(`Cannot find ${req.originalUrl} on this server!`, StatusCodes.NOT_FOUND));
     });

     // Global Error Handler
     app.use(globalErrorHandler);

     const PORT = Number(getEnv('SERVER_PORT'));
     app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
     });
};

startServer();


