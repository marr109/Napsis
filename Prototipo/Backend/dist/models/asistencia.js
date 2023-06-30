"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const alumno_1 = __importDefault(require("./alumno"));
const asignatura_1 = __importDefault(require("./asignatura"));
const Asistencia = conection_1.default.define('Asistencia', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    presente: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
});
Asistencia.belongsTo(alumno_1.default);
Asistencia.belongsTo(asignatura_1.default);
exports.default = Asistencia;
