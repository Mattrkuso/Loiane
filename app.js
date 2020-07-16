import express, {json} from 'express';
import morgan from 'morgan';

//Rutas
import registro from './src/app/node/router/registro';
import login from './src/app/node/router/login';



let app = express();


//Middlewares
app.use(morgan('dev'));
app.use(json());

//Uso
app.use('/registro',registro);
app.use('/login',login);


export default app;