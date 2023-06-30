"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.New = void 0;
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
exports.New = conection_1.default.define('new', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    fecha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
