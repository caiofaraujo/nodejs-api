const express = require("express");
const routes = require('./routes');
const app = express();

// Configuração do padrão de comunicação JSON
app.use(express.json());

app.use(routes);
app.listen(3001);