import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('XE', 'system', 'oracle', {
  dialect: 'oracle',
  host: 'localhost',
  port: 1521,
  dialectOptions: {
    connectString: 'localhost:1521/XE', // Reemplaza 'localhost:1521/XE' con tu conexión real
    // Aquí puedes agregar otras opciones específicas de Oracle si es necesario
  },
  logging: false, // Deshabilita el logging de Sequelize
});

// Exporta la instancia de Sequelize para que puedas utilizarla en otros archivos
export default sequelize;