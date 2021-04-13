// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

const express = require('express');
const routes = require('./routes');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(routes.productsRoutes);
app.use(routes.salesRoutes);

app.listen(PORT, () => {
  console.log('Ouvindo a porta 3000!');
});
