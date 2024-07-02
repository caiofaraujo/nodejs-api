// Array simulando bd
let users = [];

function create(req, res) {
    const { name, age } = req.body;
    const newUser = { 
        id: users.length ? users[users.length - 1].id + 1 : 1, 
        name, 
        age };
    users.push(newUser);

    return res.status(201).json(newUser);
}

function list(req, res) {
    return res.status(200).json(users);
}

function listById(req, res) {
    const currentUser = users.find((user) => user.id === parseInt(req.params.id));
    if(!currentUser) 
        return res.status(404).json('User not found');
    
    return res.status(200).json(currentUser);
}

function update(req, res) {
    const { name, age } = req.body;
    const index = users.findIndex((user) => user.id === parseInt(req.params.id));
    if(index === -1) 
        return res.status(404).json('User not found');

    const updatedUser = {
        id: users[index].id,
        name,
        age
    };

    users[index] = updatedUser;
    return res.status(200).json(updatedUser);
}

function remove(req, res) {
    const index = users.findIndex((user) => user.id === parseInt(req.params.id));
    if(index === -1) res.status(404).json('User not found');

    users.splice(index, 1);
    return res.status(200).json('User removed');
}

module.exports = { create, list, listById, update, remove };