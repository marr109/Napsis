// import express from 'express';
import express, { Application } from 'express';
import routesUser from '../routes/user'
import cors from 'cors';
import  User  from './user'
import Matricula from './matriculas';
import Establecimiento from './establecimiento';
import Calificacion from './calificacion';
import Curso from './curso';
import Asignatura from './asignatura';
import Asistencia from './asistencia';
import Contenido from './contenido';
import { Sequelize } from 'sequelize';
import Evaluacion from './evaluacion';
import sequelize from '../db/conection';


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

    async dbConnect() {
        try {
          await sequelize.authenticate();
          console.log('Connection has been established successfully.');
      
          await Establecimiento.sync();
          await User.sync();
          await Curso.sync();
          await Asignatura.sync();
          await Contenido.sync();
          await Asistencia.sync();
          await Calificacion.sync();
          await Evaluacion.sync();
          await Matricula.sync();
      
          console.log('All models were synchronized successfully.');
        } catch (error) {
          console.error('Unable to connect to the database:', error);
        }
      }
      
      
      
}