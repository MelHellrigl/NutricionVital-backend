import { Router } from 'express';
import { nuevaCompra } from '../controllers/comprobantes.js';

const router = Router();

router.post('/', nuevaCompra);

export default router;
