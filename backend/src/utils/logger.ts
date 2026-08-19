import winston from 'winston';
import {ENV} from '../config/env';

export const logger = winston.createLogger({
    level: ENV.NODE_ENV === 'development' ? 'debug' : 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.printf(({timestamp,level,message})=> {return `[${timestamp}] ${level}: ${message}`})
    ),
    transports: [new winston.transports.Console(),]
});