import Plan from '../models/plan.js';

// Obtener todos los planes
export const obtenerPlanes = async (req, res) => {
	try {
		const planes = await Plan.find();
		if (!planes) return res.status(404).send([]);
		return res.status(200).send(planes);
	} catch (error) {
		console.log(`Error obteniendo planes ${error}`);
		return res.status(500).send('Ocurrió un error en el servidor.');
	}
};

// Obtener un plan
export const obtenerUnPlan = async (req, res) => {
	const { id } = req.params;
	try {
		const plan = await Plan.findById(id);
		if (!plan) return res.status(404).send('Plan no encontrado');
		return res.status(200).send(plan);
	} catch (error) {
		console.log(`Error obteniendo plan ${error}`);
		return res.status(500).send('Ocurrió un error en el servidor.');
	}
};

// Crear un plan
export const nuevoPlan = async (req, res) => {
	const { plan } = req.body;
	if (!plan) return res.status(400).send({ response: false, msg: 'Falta algún dato' });
	try {
		const nuevoPlan = await Plan.create(plan);
		return res.status(201).send({ response: true, payload: nuevoPlan });
	} catch (error) {
		console.log(`Error creando plan ${error}`);
		return res.status(500).send({ response: false, payload: 'error interno del servidor' });
	}
};

// Eliminar un plan
export const eliminarPlan = async (req, res) => {
	const { id } = req.params;
	if (!id) return res.status(400).send({ response: false, payoad: 'Falta algún dato' });
	try {
		const planAeliminar = await Plan.findByIdAndDelete(id);
		if (!planAeliminar)
			return res
				.status(400)
				.send({ response: false, payload: 'No se encontró el plan solicitado' });
		return res.status(200).send({ response: true, payload: 'Se eliminó el plan correctamente.' });
	} catch (error) {
		console.log(`Error eliminando plan, ${error}`);
		return res.status(500).send({ response: false, payload: 'Error interno del servidor' });
	}
};

// Editar un plan
export const editarPlan = async (req, res) => {
	const { id } = req.params;
	const { nuevaData } = req.body;

	if (!id) return res.status(400).send({ response: false, payoad: 'Falta algún dato' });
	try {
		const planActualizado = await Plan.findByIdAndUpdate({ _id: id }, nuevaData);

		if (!planActualizado)
			return res
				.status(400)
				.send({ response: false, payload: 'No se encontró el plan solicitado' });
		return res.status(200).send({ response: true, payload: 'Se actualizó el plan correctamente.' });
	} catch (error) {
		console.log(`Error editando plan ${error}`);
		return res.status(500).send({ response: false, payload: 'error interno del servidor' });
	}
};
