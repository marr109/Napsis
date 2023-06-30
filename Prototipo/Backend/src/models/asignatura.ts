import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';
import Curso from './curso';
import Alumno from './alumno';
import Contenido from './contenido';

const Asignatura = sequelize.define('Asignatura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Asignatura.belongsToMany(Alumno, { through: 'AlumnoAsignatura' });
Alumno.belongsToMany(Asignatura, { through: 'AlumnoAsignatura' });
Asignatura.belongsTo(Curso);
Asignatura.hasMany(Contenido);

export default Asignatura;
