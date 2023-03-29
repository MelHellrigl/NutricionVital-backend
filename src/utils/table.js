const CODIGOS = {
	UNO: 1,
	DOS: 2,
	TRES: 3,
	CUATRO: 4,
};

const PESOS_DOMICILIO = {
	0.5: [892.64, 988.53, 1075.16, 1080.03],
	1: [962.38, 1153.64, 1256.68, 1266.51],
	2: [1055.96, 1187.5, 1298.07, 1372.47],
	3: [1061.89, 1254.86, 1414.87, 1509.63],
	5: [1073.86, 1487.45, 1666.54, 1838.65],
	10: [1202.06, 1715.02, 2016.73, 2349.33],
	15: [1481.17, 2205.4, 2439.78, 3272.79],
	20: [1575.52, 2692.32, 3101.43, 4166.26],
	25: [1823.35, 3199.42, 3708.38, 5036.39],
	30: [1912.36, 3934.62, 4334.25, 5439.7],
};

const PESOS_SUCURSAL = {
	0.5: [543.04, 641.77, 703.18, 718.42],
	1: [552.42, 695.01, 764.39, 798.55],
	2: [599.7, 817.35, 890.43, 960.4],
	3: [607.54, 903.88, 1025.49, 1122.74],
	5: [629.12, 1129.5, 1247.06, 1275.2],
	10: [796.04, 1368.18, 1504.88, 1970.77],
	15: [1052.76, 1856.13, 2095.51, 2564.42],
	20: [1117.2, 2381.54, 2682.18, 3553.18],
	25: [1286.64, 2854.98, 3228.77, 4308.93],
	30: [1457.14, 3423.74, 3881.24, 5305.74],
};

const DESTINOS = {
	'buenos aires': CODIGOS.TRES,
	catamarca: CODIGOS.TRES,
	chaco: CODIGOS.DOS,
	chubut: CODIGOS.CUATRO,
	córdoba: CODIGOS.CUATRO,
	corrientes: CODIGOS.DOS,
	'entre ríos': CODIGOS.TRES,
	formosa: CODIGOS.DOS,
	jujuy: CODIGOS.TRES,
	'la pampa': CODIGOS.CUATRO,
	'la rioja': CODIGOS.CUATRO,
	'mendoza ': CODIGOS.CUATRO,
	misiones: CODIGOS.DOS,
	neuquén: CODIGOS.CUATRO,
	'río negro': CODIGOS.CUATRO,
	salta: CODIGOS.TRES,
	'san juan': CODIGOS.CUATRO,
	'san luis': CODIGOS.CUATRO,
	'santa cruz': CODIGOS.CUATRO,
	'santa fe': CODIGOS.TRES,
	'stgo. del estero': CODIGOS.TRES,
	'tierra del fuego': CODIGOS.CUATRO,
	tucumán: CODIGOS.TRES,
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
		if (Number(options[i]) > peso) {
			option = Number(options[i - 1]);
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
