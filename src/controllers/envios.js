import { getCosto } from '../utils/table.js';

// Se obtiene la Localidad mediante el Codigo Postal ingresado
export const obtenerLocalidad = async (req, res) => {
	const { cp } = req.params;
	try {
		const localidad = localidades.filter((localidad) => localidad.codigosPostales.includes(cp));
		if (!localidad.length) return res.status(404).send('Localidad no encontrada');
		return res.tatus(200).send(localidad);
	} catch (error) {
		console.log(`Error obteniendo localidad ${error}`);
		return res.status(500).send('Ocurrió un error en el servidor.');
	}
};

export const obtenerCostoEnvio = async (req, res) => {
	const { provincia, peso, retira } = req.body;
	if (!provincia || !peso) {
		return res.status(404).send('Falta algún dato para obtener el costo de envío.');
	}
	try {
		const costoEnvio = getCosto(provincia, peso, retira);
		if (!costoEnvio) return res.status(404).send('Hubo un error obteniendo el costo de envío.');
		return res.status(200).send({ response: costoEnvio });
	} catch (error) {
		console.log(`Error obteniendo localidad ${error}`);
		return res.status(500).send('Ocurrió un error en el servidor.');
	}
};
