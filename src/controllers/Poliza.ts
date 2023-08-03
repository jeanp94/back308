import { Request, Response } from 'express';
import Poliza from '../models/Poliza';

export const getPolizas = async (req: Request, res: Response) => {
    const polizas = await Poliza.findAll()

    res.json(polizas)
}

export const registerPolicy = async (req: Request, res: Response) => {
    const { body } = req;
  
    try {
      // Create a new policy using Sequelize
      const newPolicy = await Poliza.create(body);
  
      res.status(201).json({
        msg: 'Póliza registrada exitosamente',
        data: newPolicy,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Ocurrió un error al registrar la póliza',
      });
    }
  };