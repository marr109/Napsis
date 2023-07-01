"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const user_1 = __importDefault(require("./user"));
const asignatura_1 = __importDefault(require("./asignatura"));
const Calificacion = conection_1.default.define('Calificacion', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nota: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    UserId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: user_1.default,
            key: 'id',
        },
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
exports.default = Calificacion;
