"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const asignatura_1 = __importDefault(require("./asignatura"));
const Contenido = conection_1.default.define('Contenido', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
});
Contenido.belongsTo(asignatura_1.default);
asignatura_1.default.hasMany(Contenido);
exports.default = Contenido;
