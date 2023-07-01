"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
// import express from 'express';
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
const cors_1 = __importDefault(require("cors"));
const user_2 = __importDefault(require("./user"));
const matriculas_1 = __importDefault(require("./matriculas"));
const establecimiento_1 = __importDefault(require("./establecimiento"));
const calificacion_1 = __importDefault(require("./calificacion"));
const curso_1 = __importDefault(require("./curso"));
const asignatura_1 = __importDefault(require("./asignatura"));
const asistencia_1 = __importDefault(require("./asistencia"));
const contenido_1 = __importDefault(require("./contenido"));
const evaluacion_1 = __importDefault(require("./evaluacion"));
const conection_1 = __importDefault(require("../db/conection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('aplicacion corriendo en el puerto ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/users', user_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conection_1.default.authenticate();
                console.log('Connection has been established successfully.');
                yield establecimiento_1.default.sync();
                yield user_2.default.sync();
                yield curso_1.default.sync();
                yield asignatura_1.default.sync();
                yield contenido_1.default.sync();
                yield asistencia_1.default.sync();
                yield calificacion_1.default.sync();
                yield evaluacion_1.default.sync();
                yield matriculas_1.default.sync();
                console.log('All models were synchronized successfully.');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
}
exports.Server = Server;
