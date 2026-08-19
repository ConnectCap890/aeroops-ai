import {createServer} from 'http';
import {ENV} from './src/config/env';
import app from './src/app';
import connectDB from './src/config/db';
import {logger} from './src/utils/logger';

const httpServer = createServer(app);

const start = async (): Promise<void> =>{
    await connectDB();

    httpServer.listen(ENV.PORT,() =>{
        logger.info(`Server running on port ${ENV.PORT} in ${ENV.NODE_ENV} mode`);
    });
};

start();