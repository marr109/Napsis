import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';
import Asignatura from './asignatura';

const Evaluacion = sequelize.define('Evaluacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  nombrePrueba: {
    type: DataTypes.STRING,
    allowNull: false,
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

export default Evaluacion;
