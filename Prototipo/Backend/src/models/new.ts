import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';

export const New = sequelize.define('new', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    imagen:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    
    fecha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    url:{
        type: DataTypes.STRING,
        allowNull: false
    }


});