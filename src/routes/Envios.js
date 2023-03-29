import { Router } from 'express';
import { obtenerLocalidad, obtenerCostoEnvio } from '../controllers/envios.js';

const router = Router();
router.post('/', obtenerCostoEnvio);

router.get('/:cp', obtenerLocalidad);

export default router;
