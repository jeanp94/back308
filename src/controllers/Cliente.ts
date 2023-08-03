import { Request, Response } from 'express';
import Cliente from '../models/Cliente';

export const getClientes = async (req: Request, res: Response) => {
    const clientes = await Cliente.findAll()

    res.json(clientes)
}

// Implementar las funciones para obtener un cliente por ID, eliminar un cliente, crear un nuevo cliente y actualizar un cliente.
//...

export const createClient = async (req: Request, res: Response) => {
    const { body } = req;
  
    try {
      // Create a new client using Sequelize
      const newClient = await Cliente.create(body);
  
      res.status(201).json({
        msg: 'Cliente creado exitosamente',
        data: newClient,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Ocurrió un error al crear el cliente',
      });
    }
  };

  export const updateCliente = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
  
    try {
      const cliente = await Cliente.findByPk(id);
  
      if (cliente) {
        await cliente.update(body);
        res.json({
          msg: 'El cliente fue actualizado con éxito',
        });
      } else {
        res.status(404).json({
          msg: `No existe un cliente con el ID ${id}`,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Ocurrió un error al actualizar el cliente',
      });
    }
  };

  export const deleteCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const cliente = await Cliente.findByPk(id);
  
      if (!cliente) {
        res.status(404).json({
          msg: `No existe un cliente con el ID ${id}`,
        });
      } else {
        await cliente.destroy();
        res.json({
          msg: 'El cliente fue eliminado con éxito',
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Ocurrió un error al eliminar el cliente',
      });
    }
  };
  

  export const getClienteById = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const cliente = await Cliente.findByPk(id);
  
      if (cliente) {
        res.json(cliente);
      } else {
        res.status(404).json({
          msg: `No existe un cliente con el ID ${id}`,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Ocurrió un error al obtener el cliente',
      });
    }
  };
  