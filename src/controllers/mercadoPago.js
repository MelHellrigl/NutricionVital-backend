import mercadopago from 'mercadopago';

import * as dotenv from 'dotenv';

const checkOutController = (req, res) => {
	dotenv.config();
	const TOKEN = process.env.MP_ACCESS_TOKEN;

	mercadopago.configure({
		access_token: TOKEN,
	});

	const { itemsCompra } = req.body;

	const preference = {
		binary_mode: true,
		items: itemsCompra,
		payer: {
			name: 'cliente Nutricion vital',
			surname: 'cliente',
			email: 'test@test.test',
		},
		back_urls: {
			failure: 'http://localhost:5173',
			pending: 'http://localhost:5173',
			success: 'http://localhost:5173/sct/pagos/exito',
		},
		auto_return: 'approved',
	};
	mercadopago.preferences
		.create(preference)
		.then(function (response) {
			res.status(200).json({ global: response.body.id });
		})
		.catch((error) => {
			res.status(500).json({ global: error });
			console.log(error);
		});
};

export default checkOutController;
