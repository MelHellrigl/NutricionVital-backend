const CODIGOS = {
	UNO: 1,
	DOS: 2,
	TRES: 3,
	CUATRO: 4,
};

const PESOS_DOMICILIO = {
	0.5: [1071.17, 1186.23, 1290.19, 1296.04],
	1: [1154.85, 1384.37, 1508.02, 1519.81],
	2: [1267.15, 1425.01, 1557.68, 1646.96],
	3: [1274.27, 1505.83, 1697.85, 1811.56],
	5: [1288.63, 1784.94, 1999.85, 2206.38],
	10: [1442.47, 2058.03, 2420.07, 2819.2],
	15: [1777.4, 2646.48, 2927.73, 3927.35],
	20: [1890.63, 3230.78, 3721.71, 4999.51],
	25: [2188.02, 3839.3, 4450.05, 6043.67],
	30: [2294.83, 4721.54, 5201.1, 6527.64],
};

const PESOS_SUCURSAL = {
	0.5: [651.65, 770.12, 843.82, 862.1],
	1: [662.9, 834.01, 917.27, 958.26],
	2: [719.63, 980.82, 1068.52, 1152.49],
	3: [729.04, 1084.65, 1230.59, 1347.29],
	5: [754.94, 1355.4, 1496.48, 1530.24],
	10: [955.25, 1641.81, 1805.86, 2364.92],
	15: [1263.31, 2227.36, 2514.61, 3077.3],
	20: [1340.65, 2857.85, 3218.62, 4263.82],
	25: [1543.97, 3425.97, 3874.53, 5170.71],
	30: [1748.56, 4108.49, 4657.49, 6366.89],
};

const DESTINOS = {
	'buenos aires': CODIGOS.TRES,
	catamarca: CODIGOS.TRES,
	chaco: CODIGOS.DOS,
	chubut: CODIGOS.CUATRO,
	cordoba: CODIGOS.CUATRO,
	corrientes: CODIGOS.DOS,
	'entre rios': CODIGOS.TRES,
	formosa: CODIGOS.DOS,
	jujuy: CODIGOS.TRES,
	'la pampa': CODIGOS.CUATRO,
	'la rioja': CODIGOS.CUATRO,
	'mendoza ': CODIGOS.CUATRO,
	misiones: CODIGOS.DOS,
	neuquen: CODIGOS.CUATRO,
	'rio negro': CODIGOS.CUATRO,
	salta: CODIGOS.TRES,
	'san juan': CODIGOS.CUATRO,
	'san luis': CODIGOS.CUATRO,
	'santa cruz': CODIGOS.CUATRO,
	'santa fe': CODIGOS.TRES,
	'stgo. del estero': CODIGOS.TRES,
	'tierra del fuego': CODIGOS.CUATRO,
	tucuman: CODIGOS.TRES,
};

export function getCodigo(provincia) {
	return DESTINOS[provincia] || 1;
}

// De acuerdo a la cantidad de productos identifica cúal es el peso de envío
function compareNumbers(a, b) {
	return a - b;
}

function getPesoEnvio(peso) {
	const options = Object.keys(PESOS_SUCURSAL);
	options.sort(compareNumbers);
	let option;
	for (let i = 0; i < options.length; i++) {
		if (Number(options[i]) >= peso) {
			option = Number(options[i]);
			break;
		}
	}

	if (!option && peso <= 30) option = 30;

	return option;
}

// Getcosto domicilio o sucursal
// retira representa "retiro en sucursal" y es un booleano
export function getCosto(provincia, peso, retira) {
	const pesoTabla = getPesoEnvio(peso);
	const codigo = getCodigo(provincia.toLowerCase());
	if (!retira) return PESOS_DOMICILIO[pesoTabla][codigo - 1];
	return PESOS_SUCURSAL[pesoTabla][codigo - 1];
}
