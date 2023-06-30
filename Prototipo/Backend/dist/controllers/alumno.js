"use strict";
// models/Alumno.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const Asignatura = require('./Asignatura');
const Alumno = sequelize.define('Alumno', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
// Relación entre Alumno y Asignatura (Muchos a muchos)
Alumno.belongsToMany(Asignatura, { through: 'AsignaturaAlumno' });
Asignatura.belongsToMany(Alumno, { through: 'AsignaturaAlumno' });
module.exports = Alumno;
