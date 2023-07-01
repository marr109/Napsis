import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';

const Establecimiento = sequelize.define('Establecimiento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  insignea: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

export default Establecimiento;
