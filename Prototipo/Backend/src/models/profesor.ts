import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';
import Curso from './curso';

const Profesor = sequelize.define('Profesor', {
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

Profesor.belongsTo(Curso);

export default Profesor;
