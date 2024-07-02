const { Router } = require("express");

const routes = new Router();

// Array simulando bd
let users = [];

routes.get('/health', (req, res) => {
    return res.status(200).json('API STATUS: [ONLINE]');
});

routes.post('/users', (req, res) => {
    const { name, age } = req.body;
    const newUser = { 
        id: users.length ? users[users.length - 1].id + 1 : 1, 
        name, 
        age };
    users.push(newUser);
    return res.status(201).json(newUser);
});

routes.get('/users', (req, res) => {
    return res.status(200).json(users);
});

routes.get('/users/:id', (req, res) => {
    const currentUser = users.find((user) => user.id === parseInt(req.params.id));
    if(!currentUser) 
        return res.status(404).json("User not found");
    
    return res.status(200).json(currentUser);
});

routes.delete('/users/:id', (req, res) => {
    const index = users.findIndex((user) => user.id === parseInt(req.params.id));
    if(index === -1) res.status(404).json("User not found");

    users.splice(index, 1);
    return res.status(200).json("User removed");
});

routes.put('/users/:id', (req, res) => {
    const { name, age } = req.body;
    const index = users.findIndex((user) => user.id === parseInt(req.params.id));
    if(index === -1) 
        return res.status(404).json("User not found");

    const updatedUser = {
        id: users[index].id,
        name,
        age
    };

    users[index] = updatedUser;
    return res.status(200).json(updatedUser);
});

module.exports = routes;