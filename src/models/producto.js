import { Schema, model } from 'mongoose';

const productoSchema = new Schema({
	nombre: { type: String, required: true },
	descripcion: { type: String, required: true },
	precio: { type: Number },
	disponibles: { type: Number },
	imagen: { type: String, required: true },
	fecha_publicacion: { type: Date, default: Date.now },
});

export default model('Producto', productoSchema);
