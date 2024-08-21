const express = require('express');
const app = express();

app.use(express.json());

app.get('/usuarios', (_, res) => {
  res.send("Aquí van a ir los usuarios");
});

const PUERTO = 3001;

app.listen(PUERTO);