import { Router } from 'express';
import {
	obtenerProductos,
	obtenerUnProducto,
	nuevoProducto,
	eliminarProducto,
	editarProducto,
} from '../controllers/productos.js';

const router = Router();

router.get('/', obtenerProductos);
router.get('/:id', obtenerUnProducto);
router.post('/', nuevoProducto);
router.delete('/:id', eliminarProducto);
router.put('/:id', editarProducto);

export default router;
