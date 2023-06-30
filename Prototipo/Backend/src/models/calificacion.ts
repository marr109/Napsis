import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';
import Alumno from './alumno';
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
});

Calificacion.belongsTo(Alumno);
Calificacion.belongsTo(Asignatura);

export default Calificacion;
