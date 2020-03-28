const express = require('express');

const OngController = require('./conttrollers/OngController');
const IncidentController = require('./conttrollers/IncidentController');
const ProfileController = require('./conttrollers/ProfileController');
const SessionController = require('./conttrollers/SessionController');

const routes = express.Router();

/* 
Métodos HTTP:

GET: Buscar/Listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/

/*
Tipos de Parâmetros:

Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação).
Route Params: Parâmetros utilizados para identificar recursos.
Request Body: Corpo da requisição, utilizando para criar ou alterar recursos
*/

routes.post('/sessions', SessionController.create);

// Listagem de Cadastros
routes.get('/ongs', OngController.index);
// Cadastros
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)

routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
