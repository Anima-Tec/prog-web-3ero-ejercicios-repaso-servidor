const express = require('express');
const app = express();

app.use(express.json());

app.get('/usuarios', (_, res) => {
  res.send("Aquí van a ir los usuarios");
});

app.get('/usuario/:usuarioId/clases', (req, res) => {
  const usuarioId = req.params.usuarioId
  res.send(`Aquí van a ir las clases del usuario ${usuarioId}`);
});

const PUERTO = 3001;

app.listen(PUERTO);