import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';
import Curso from './curso';

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

Alumno.belongsTo(Curso);

export default Alumno;
