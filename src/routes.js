const { Router } = require('express');
const { create, list, listById, update, remove } = require('./controllers/users.js')

const routes = new Router();

routes.get('/health', (req, res) => {
    return res.status(200).json('API STATUS: [ONLINE]');
});

routes.post('/users', create);
routes.get('/users', list);
routes.get('/users/:id', listById);
routes.put('/users/:id', update);
routes.delete('/users/:id', remove);

module.exports = routes;