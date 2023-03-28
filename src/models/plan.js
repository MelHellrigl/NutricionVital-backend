import { Schema, model } from 'mongoose';

const planSchema = new Schema({
	nombre: { type: String, required: true, match: /[a-zA-Z]/ },
	descripcion: { type: String, required: true },
	precio: { type: Number },
	disponibles: { type: Boolean },
	imagen: { type: String, required: true },
	fecha_publicacion: { type: Date, default: Date.now },
	detalle: {
		introduccion: { type: String },
		contenido: [{ type: String }],
	},
});

export default model('Plan', planSchema);
