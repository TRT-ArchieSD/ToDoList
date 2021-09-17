var express = require('express');
var app = express(); 
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://user:password@127.0.0.1:27017/todo')

//create schema
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

var itemOne = Todo({item: 'get flowers'}).save(function(err){
    if (err) throw err;
    console.log('item saved');
});



var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'clean house'}];



var urlencodedParser = express.urlencoded({extended: false});


module.exports = function(app){

    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(req, res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo) {
            return todo.item.trim().replace(/ /g, '-') !== req.params.id;
        });
        res.json(data);
    });

};

    // put all white spaces to '-' and if the input is NOT equal to the query params, returns TRUE. ((discard all FALSES))
//     app.delete('/todo/:item', function(req, res){
//         data = data.filter(function(todo) {
//             return todo.item.trim().replace(/ /g, '-') !== req.params.item;
//         });
//         res.json(data);
//     });
// }