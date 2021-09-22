const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

//template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

//fire controllers
todoController(app);
// app.use('/blah', todoController); //this one does not work

//listen to port
app.listen(PORT, HOST);
console.log(`Running on https://${HOST}:${PORT}/todo inside the container`);