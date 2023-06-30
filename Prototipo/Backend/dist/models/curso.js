"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const Alumno_1 = __importDefault(require("./Alumno"));
const Profesor_1 = __importDefault(require("./Profesor"));
const Curso = conection_1.default.define('Curso', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
Curso.hasMany(Alumno_1.default);
Curso.hasMany(Profesor_1.default);
exports.default = Curso;
