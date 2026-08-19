import dotenv from 'dotenv';
dotenv.config();

const requiredEnv = (key: string): string => {
    const value = process.env[key];
    if (!value){
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
}

export const ENV = {
   PORT : parseInt(process.env.PORT || '5000', 10),
   MONGO_URI : requiredEnv('MONGO_URI'),
   JWT_SECRET : requiredEnv('JWT_SECRET'),
   JWT_EXPIRES_IN : requiredEnv('JWT_EXPIRES_IN'),
   ANTHROPIC_API_KEY : requiredEnv('ANTHROPIC_API_KEY'),
   NODE_ENV : process.env.NODE_ENV || 'development',
   OPENSKY_USERNAME: process.env.OPENSKY_USERNAME || '',
   OPENSKY_PASSWORD: process.env.OPENSKY_PASSWORD || '',
};