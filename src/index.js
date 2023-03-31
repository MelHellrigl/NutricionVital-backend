import express from 'express';
import { connectToDB } from './db/connection.js';
import productoRoutes from './routes/Productos.js';
import enviosRoutes from './routes/Envios.js';
import planesRoutes from './routes/Planes.js';
import mercadoPagoRoutes from './routes/MercadoPago.js';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();
const corsOptions = {
	origin: '*',
	methods: 'GET, POST, PUT, DELETE',
	credentials: true,
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested With, Content-Type, Accept');
	next();
});
const PORT = process.env.PORT;

app.get('/', (req, res) => {
	res.status(200).send('Hola mundo');
});

app.use(bodyParser.json());
app.use('/producto', productoRoutes);
app.use('/envios', enviosRoutes);
app.use('/plan', planesRoutes);
app.use('/pago', mercadoPagoRoutes);

app.listen(PORT, () => {
	connectToDB();
	console.log(`El servidor se levanto correctamente en el puerto ${PORT} 🎈`);
});

// OLA jelo
