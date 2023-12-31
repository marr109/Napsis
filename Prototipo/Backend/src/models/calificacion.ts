import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';
import User from './user';
import Asignatura from './asignatura';

const Calificacion = sequelize.define('Calificacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nota: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  AsignaturaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Asignatura,
      key: 'id',
    },
  },
});

export default Calificacion;
