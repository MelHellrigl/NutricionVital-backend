import Producto from '../models/producto.js';

// Obtener todos los productos
export const obtenerProductos = async (req, res) => {
	try {
		const productos = await Producto.find();
		if (!productos) return res.status(404).send([]);
		return res.status(200).send(productos);
	} catch (error) {
		console.log(`Error obteniendo productos ${error}`);
		return res.status(500).send('Ocurrió un error en el servidor.');
	}
};

// Obtener un producto
export const obtenerUnProducto = async (req, res) => {
	const { id } = req.params;
	try {
		const producto = await Producto.findById(id);
		if (!producto) return res.status(404).send('Producto no encontrado');
		return res.status(200).send(producto);
	} catch (error) {
		console.log(`Error obteniendo producto ${error}`);
		return res.status(500).send('Ocurrió un error en el servidor.');
	}
};

// Crear un producto
export const nuevoProducto = async (req, res) => {
	const { producto } = req.body;
	if (!producto) return res.status(400).send({ response: false, msg: 'Falta algún dato' });
	try {
		const nuevoProducto = await Producto.create(producto);
		return res.status(201).send({ response: true, payload: nuevoProducto });
	} catch (error) {
		console.log(`Error creando producto ${error}`);
		return res.status(500).send({ response: false, payload: 'error interno del servidor' });
	}
};

// Eliminar un producto
export const eliminarProducto = async (req, res) => {
	const { id } = req.params;
	if (!id) return res.status(400).send({ response: false, payoad: 'Falta algún dato' });
	try {
		const productoAeliminar = await Producto.findByIdAndDelete(id);
		if (!productoAeliminar)
			return res
				.status(400)
				.send({ response: false, payload: 'No se encontró el producto solicitado' });
		return res
			.status(200)
			.send({ response: true, payload: 'Se eliminó el producto correctamente.' });
	} catch (error) {
		console.log(`Error eliminando producto, ${error}`);
		return res.status(500).send({ response: false, payload: 'Error interno del servidor' });
	}
};

// Editar un producto
export const editarProducto = async (req, res) => {
	const { id } = req.params;
	const { nuevaData } = req.body;

	if (!id) return res.status(400).send({ response: false, payoad: 'Falta algún dato' });
	try {
		const productoActualizado = await Producto.findByIdAndUpdate({ _id: id }, nuevaData);

		if (!productoActualizado)
			return res
				.status(400)
				.send({ response: false, payload: 'No se encontró el producto solicitado' });
		return res
			.status(200)
			.send({ response: true, payload: 'Se actualizó el producto correctamente.' });
	} catch (error) {
		console.log(`Error editando producto ${error}`);
		return res.status(500).send({ response: false, payload: 'error interno del servidor' });
	}
};
