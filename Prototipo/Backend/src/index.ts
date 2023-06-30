// const nombre: string = 'Tomas';
// console.log(nombre);

import { Server } from "./models/server";
import dotenv from 'dotenv';

//Configuramos dotenv

dotenv.config();

const server = new Server();