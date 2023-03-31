import { Router } from 'express';
import checkOutController from '../controllers/mercadoPago.js';

const router = Router();
router.post('/', checkOutController);

export default router;
