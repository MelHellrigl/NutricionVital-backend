import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.status(200).send('Hola mundo');
});

app.listen(PORT, () => {
  console.log(`El servidor se levanto correctamente en el puerto ${PORT} 🎈`);
});
