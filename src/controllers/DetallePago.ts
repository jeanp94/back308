import { Request, Response } from 'express';
import db from '../db/connection';
import DetallePago from '../models/DetallePago';
import Pago from '../models/Pago';

export const getDetallesPago = async (req: Request, res: Response) => {
    const detallesPago = await DetallePago.findAll()

    res.json(detallesPago)
}

// Implementar las funciones para obtener un detalle de pago por ID, eliminar un detalle de pago, crear un nuevo detalle de pago y actualizar un detalle de pago.
//...

export const registerPayment = async (req: Request, res: Response) => {
    const { body } = req;
  
    const t = await db.transaction(); // Start a new transaction
  
    try {
      // Create a new payment using Sequelize and within the transaction
      const newPayment = await Pago.create(body, { transaction: t });
  
      // Create the payment details using Sequelize and within the transaction
      await DetallePago.bulkCreate(body.detalles.map((detalle: any) => ({ ...detalle, ID_Pago: newPayment.increment })), { transaction: t });
  
      // Commit the transaction after both operations succeed
      await t.commit();
  
      res.status(201).json({
        msg: 'Pago registrado exitosamente',
        data: newPayment,
      });
    } catch (error) {
      console.error(error);
      // Rollback the transaction if there's an error
      await t.rollback();
      res.status(500).json({
        msg: 'Ocurrió un error al registrar el pago',
      });
    }
  };