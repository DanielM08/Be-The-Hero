const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
  Tipos de parâmetros:

  Query Params: Parâmetros nomeados enviados na rota após o símbolo de "?" (Filtros, paginação)
  Route Params: Parâmetros utilizados para identificar recursos
  Request Body:
*/
/**
 * Driver: Select * FROM users
 * Query Builder: table('users').select('*').where()
 */

module.exports = app;
