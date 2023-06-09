import Comprobante from '../models/comprobanteCompra.js';
import { enviarCompraIngresada, enviarCompraRealizada } from '../mails/index.js';

export const nuevaCompra = async (req, res) => {
	const { compra } = req.body;

	if (!compra) return res.status(400).send({ response: false, msg: 'Falta algún dato' });
	try {
		const nuevaCompraIngresada = await Comprobante.create(compra);

		if (nuevaCompraIngresada) {
			enviarCompraIngresada(nuevaCompraIngresada);
			enviarCompraRealizada(nuevaCompraIngresada);
		}
		return res.status(201).send({ response: true, payload: nuevaCompraIngresada });
	} catch (error) {
		console.log(`Error creando comprobante ${error}`);
		return res.status(500).send({ response: false, payload: 'error interno del servidor' });
	}
};
