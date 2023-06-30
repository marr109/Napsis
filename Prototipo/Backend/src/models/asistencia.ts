import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';
import Alumno from './alumno';
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
});

Asistencia.belongsTo(Alumno);
Asistencia.belongsTo(Asignatura);

export default Asistencia;
