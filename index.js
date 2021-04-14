const express = require('express');
const routes = require('./routes');
const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

const PORT = 3000;

app.use(express.json());
app.use(routes.productsRoutes);
app.use(routes.salesRoutes);

app.listen(PORT, () => {
  console.log('Ouvindo a porta 3000!');
});
