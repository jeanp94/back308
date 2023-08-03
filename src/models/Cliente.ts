import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Cliente = db.define('Cliente', {
  ID_Cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre_Cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Correo_Electronico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Fecha_Nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  Sexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

export default Cliente;
