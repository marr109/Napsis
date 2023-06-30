// import express from 'express';
import express, { Application } from 'express';
import routesUser from '../routes/user'
import cors from 'cors';
import { User } from './user'

export class Server{

    private app: express.Application;
    private port: string;
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes(){
        this.app.use('/api/users',routesUser);
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors())
    }

    async dbConnect(){
        try{
            await User.sync()
        }catch (error){
            console.log('database not found');
        }
    }
}