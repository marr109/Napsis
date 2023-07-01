import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';
import User from './user';
import Asignatura from './asignatura';

const Asistencia = sequelize.define('Asistencia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  presente: {
    type: DataTypes.BOOLEAN,
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

export default Asistencia;
