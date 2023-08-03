import { DataTypes } from 'sequelize';
import db from '../db/connection';

const DetallePago = db.define('DetallePago', {
  ID_Detalle_Pago: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ID_Pago: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Monto_Pago_Detalle: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  Metodo_Pago: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Moneda: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

export default DetallePago;
