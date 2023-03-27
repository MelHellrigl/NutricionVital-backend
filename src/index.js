import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hola mundo');
});

app.listen(PORT, () => {
  console.log(`El servidor se levanto correctamente en el puerto ${PORT} 🎈`);
});
