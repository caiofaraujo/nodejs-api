const { Router } = require('express');
const { create, list, listById, update, remove } = require('./controllers/users.js');
const { health } = require('./controllers/health.js');
const { tokenValidator } = require('./middlewares/AuthMiddleware.js');

const routes = new Router();

routes.get('/health', health);

routes.post('/users', tokenValidator, create);
routes.get('/users', tokenValidator, list);
routes.get('/users/:id', tokenValidator, listById);
routes.put('/users/:id', tokenValidator, update);
routes.delete('/users/:id', tokenValidator, remove);

module.exports = routes;