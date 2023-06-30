import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';
import Asignatura from './asignatura';

const Contenido = sequelize.define('Contenido', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Contenido.belongsTo(Asignatura);
Asignatura.hasMany(Contenido);

export default Contenido;
