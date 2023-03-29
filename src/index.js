import express from 'express';
import { connectToDB } from './db/connection.js';
import productoRoutes from './routes/Productos.js';
import enviosRoutes from './routes/Envios.js';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
	res.status(200).send('Hola mundo');
});
app.use(bodyParser.json());
app.use('/producto', productoRoutes);
app.use('/envios', enviosRoutes);

app.listen(PORT, () => {
	connectToDB();
	console.log(`El servidor se levanto correctamente en el puerto ${PORT} 🎈`);
});

// OLA jelo
