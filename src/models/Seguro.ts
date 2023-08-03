import { DataTypes } from 'sequelize';
import db from '../db/connection';

const seguro = db.define('Seguro', {
  ID_Seguro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ID_Cobertura: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Nombre_Seguro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Precio: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  Moneda: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Duracion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Para deshabilitar los campos createdAt y updatedAt
});

export default seguro;
