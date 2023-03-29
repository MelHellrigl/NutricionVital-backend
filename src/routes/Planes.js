import { Router } from 'express';
import {
	obtenerPlanes,
	obtenerUnPlan,
	nuevoPlan,
	eliminarPlan,
	editarPlan,
} from '../controllers/planes.js';

const router = Router();

router.get('/', obtenerPlanes);
router.get('/:id', obtenerUnPlan);
router.post('/', nuevoPlan);
router.delete('/:id', eliminarPlan);
router.put('/:id', editarPlan);

export default router;
