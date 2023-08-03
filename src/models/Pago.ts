import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Pago = db.define('Pago', {
  ID_Pago: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ID_Poliza: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Fecha_Pago: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Total_Pago: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  Moneda: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

export default Pago;
