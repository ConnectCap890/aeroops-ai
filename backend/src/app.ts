import express,{Application,Request,Response} from 'express';
import cors from 'cors' ;
import {ENV} from './config/env';

const app: Application = express();

//middlewares
app.use(cors({
    origin: ENV.NODE_ENV === 'development' ? 'https://your-frontend-domain.com' :'http://localhost:5173',
    credentials : true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//health check route
app.get('/api/health',(_req: Request, res: Response) => {
    res.status(200).json({
        status: 'ok',
        message: 'AeroOps AI backend is running',
        environment: ENV.NODE_ENV,
    });
});

//routes


//404 handler
app.use((_req: Request, res: Response)=> {
    res.status(404).json({message: 'Route not found'});
});

export default app;