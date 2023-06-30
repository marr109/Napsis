import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';

export const User = sequelize.define('user', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    usuario:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    rol:{
        type: DataTypes.STRING,
        defaultValue: 'usuario',
        allowNull: false
    }


});