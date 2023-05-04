import { Schema, model } from 'mongoose';

const comprobanteSchema = new Schema({
	usuario: {
		nombre: { type: String, required: true },
		apellido: { type: String, required: true },
		email: { type: String, required: true },
		direccion: { type: String, required: true },
		codigoPostal: { type: Number, required: true },
		provincia: { type: String, required: true },
		telefono: { type: Number, required: true },
		localidad: { type: String, required: true },
	},
	carrito: [
		{
			nombre: { type: String, required: true },
			cantidad: { type: Number, default: 1 },
			precio: { type: Number, required: true },
		},
	],

	pago: {
		type: String,
		required: true,
		enum: ['EFECTIVO', 'TRANSFERENCIA', 'MERCADOPAGO'],
	},
});

export default model('Comprobante', comprobanteSchema);
