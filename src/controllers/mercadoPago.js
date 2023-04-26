import mercadopago from 'mercadopago';

const checkOutController = (req, res) => {
	mercadopago.configure({
		access_token: 'TEST-6460209993301768-033010-3d163436d7678dccc0e0fd225b6846f5-97199894',
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
			success: 'http://localhost:5173',
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
