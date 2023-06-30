"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
exports.User = conection_1.default.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'usuario',
        allowNull: false
    }
});
