const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá, Laboratorio 4 node js  !');
});

app.listen(port, () => {
  console.log(`Servidor em http://localhost:${port}`);
});


