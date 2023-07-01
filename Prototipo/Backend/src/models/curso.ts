import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';
import User from './user';
import Establecimiento from './establecimiento';

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
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  EstablecimientoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Establecimiento,
      key: 'id',
    },
  },
});

export default Curso;
