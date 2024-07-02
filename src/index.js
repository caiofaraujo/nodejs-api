const express = require("express");

const app = express();

// Configuração do padrão de comunicação JSON
app.use(express.json());

app.get('/health', (req, res) => {
    res.send('API STATUS: [ONLINE] ');
});

// Array simulando bd
let users = [];

app.post('/users', (req, res) => {
    const { name, age } = req.body;
    const newUser = { 
        id: users.length ? users[users.length - 1].id + 1 : 1, 
        name, 
        age };
    users.push(newUser);
    res.send(newUser);
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const currentUser = users.find((user) => user.id === parseInt(req.params.id));
    if(!currentUser) res.send("User not found");
    res.send(currentUser);
});

app.delete('/users/:id', (req, res) => {
    const index = users.findIndex((user) => user.id === parseInt(req.params.id));
    if(index === -1) res.send("User not found");

    users.splice(index, 1);
    res.send("User removed");
});

app.put('/users/:id', (req, res) => {
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

app.listen(3001);