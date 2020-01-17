// Importando dependências
/* O express é um microframework que facilita
   a criação de um servidor e o estabelecimento
   de rotas em nodejs.
*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://lalves86:p3SXGK6PBUHCGuBL@cluster0-sammj.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);