import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';
import Alumno from './Alumno';
import Profesor from './Profesor';

const Curso = sequelize.define('Curso', {
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

Curso.hasMany(Alumno);
Curso.hasMany(Profesor);

export default Curso;
