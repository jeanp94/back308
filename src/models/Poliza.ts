import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Poliza = db.define('Poliza', {
  ID_Poliza: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ID_Cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ID_Seguro: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Fecha_Inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Fecha_Vencimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Estado_Poliza: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

export default Poliza;
