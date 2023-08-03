import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Cobertura = db.define('Cobertura', {
  ID_Cobertura: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre_Cobertura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Para deshabilitar los campos createdAt y updatedAt
});

export default Cobertura;
