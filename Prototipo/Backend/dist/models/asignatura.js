"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const curso_1 = __importDefault(require("./curso"));
const alumno_1 = __importDefault(require("./alumno"));
const contenido_1 = __importDefault(require("./contenido"));
const Asignatura = conection_1.default.define('Asignatura', {
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
Asignatura.belongsToMany(alumno_1.default, { through: 'AlumnoAsignatura' });
alumno_1.default.belongsToMany(Asignatura, { through: 'AlumnoAsignatura' });
Asignatura.belongsTo(curso_1.default);
Asignatura.hasMany(contenido_1.default);
exports.default = Asignatura;
