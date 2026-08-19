import mongoose from 'mongoose'; 
import {ENV} from './env';
import {logger} from '../utils/logger';
const connectDB = async (): Promise<void> => {

    try{
        const conn = await mongoose.connect(ENV.MONGO_URI);
        logger.info(`MongoDB Connected: ${conn.connection.host}`);

    }catch(error){
        logger.error(`MongoDb connection failed :${error}`);
        process.exit(1);
    }
};

export default connectDB;