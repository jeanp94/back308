import { createClient, deleteCliente, getClienteById, updateCliente } from './../controllers/Cliente';
import { Router } from 'express';
import { getAllSeguros,getSeguroDetails } from '../controllers/Seguro';
import { registerPolicy } from '../controllers/Poliza';
import { registerPayment } from '../controllers/DetallePago';

const router = Router();

// Ruta para obtener la lista de seguros con sus coberturas asociadas
router.get('/seguros', getAllSeguros);

// Ruta para obtener los detalles de un seguro específico, incluyendo información de clientes con pólizas activas
router.get('/seguros/:id', getSeguroDetails);


// Endpoint para agregar un nuevo cliente junto con sus datos personales.
router.post('/clients', createClient);
//Crud
router.get('/clients/:id', getClienteById);
router.patch('/clientsupdate', updateCliente);
router.delete('/clientsupdate', deleteCliente);



//Endpoint para registrar una póliza de un nuevo cliente de un seguro que haya adquirido.
router.post('/policies', registerPolicy);

//•	Endpoint para registrar un nuevo pago para una póliza específica. El pago se registra en las Tablas Pagos y pagos Detalle. Para mantener la integridad de los datos se debe usar transacciones en Node JS.
router.post('/payments', registerPayment);

export default router;