const { Router } = require("express");

const routes = new Router();

// Array simulando bd
let users = [];

routes.get('/health', (req, res) => {
    res.send('API STATUS: [ONLINE] ');
});

routes.post('/users', (req, res) => {
    const { name, age } = req.body;
    const newUser = { 
        id: users.length ? users[users.length - 1].id + 1 : 1, 
        name, 
        age };
    users.push(newUser);
    res.send(newUser);
});

routes.get('/users', (req, res) => {
    res.send(users);
});

routes.get('/users/:id', (req, res) => {
    const currentUser = users.find((user) => user.id === parseInt(req.params.id));
    if(!currentUser) res.send("User not found");
    res.send(currentUser);
});

routes.delete('/users/:id', (req, res) => {
    const index = users.findIndex((user) => user.id === parseInt(req.params.id));
    if(index === -1) res.send("User not found");

    users.splice(index, 1);
    res.send("User removed");
});

routes.put('/users/:id', (req, res) => {
    const { name, age } = req.body;
    const index = users.findIndex((user) => user.id === parseInt(req.params.id));
    if(index === -1) res.send("User not found");

    const updatedUser = {
        id: users[index].id,
        name,
        age
    };

    users[index] = updatedUser;
    res.send(updatedUser);
});

module.exports = routes;