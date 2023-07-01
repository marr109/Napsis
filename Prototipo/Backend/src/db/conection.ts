import { Sequelize } from "sequelize";

const sequelize = new Sequelize('libroDigital', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;