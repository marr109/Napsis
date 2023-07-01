"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const asignatura_1 = __importDefault(require("./asignatura"));
const Evaluacion = conection_1.default.define('Evaluacion', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    nombrePrueba: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    AsignaturaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: asignatura_1.default,
            key: 'id',
        },
    },
});
exports.default = Evaluacion;
