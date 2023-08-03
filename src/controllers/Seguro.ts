import { Request, Response } from 'express';
import Seguro from '../models/Seguro';
import Cobertura from '../models/Cobertura';
import Poliza from '../models/Poliza';
import Cliente from '../models/Cliente';

export const getAllSeguros = async (req: Request, res: Response) => {
  try {
    const seguros = await Seguro.findAll({
      include: [
        {
          model: Cobertura,
          attributes: ['ID_Cobertura', 'Nombre_Cobertura', 'Descripcion'],
        },
      ],
    });

    res.json(seguros);
  } catch (error) {
    console.error('Error al obtener la lista de seguros:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener la lista de seguros.' });
  }
};
export const getSeguroDetails = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const seguro = await Seguro.findByPk(id, {
        include: [
          {
            model: Poliza,
            include: [Cliente],
            where: {
              Estado_Poliza: 'Activo'
            }
          }
        ]
      });
  
      if (seguro) {
        res.json(seguro);
      } else {
        res.status(404).json({
          msg: `No existe un seguro con el id ${id}`
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: 'Error interno del servidor'
      });
    }
  };