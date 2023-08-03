import { Request, Response } from 'express';
import Pago from '../models/Pago';

export const getPagos = async (req: Request, res: Response) => {
    const pagos = await Pago.findAll()

    res.json(pagos)
}

// Implementar las funciones para obtener un pago por ID, eliminar un pago, crear un nuevo pago y actualizar un pago.
//...

