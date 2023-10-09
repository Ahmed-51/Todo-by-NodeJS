var bodyParser = require('body-parser'); 
var bp = bodyParser.urlencoded({extended: false});

var data = [{item: 'Run 10 miles'}, {item: 'Learn MERN stack'}, {item: 'Pray 5 times a day'}];



module.exports = function(app){
    app.get('/todo', (req, res)=>{
        res.render('todo', {todos: data});
    });

    app.post('/todo', bp, function(req, res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', (req, res)=>{
        data.filter((todo)=>{
            return todo.item.replace(/ /g, '-') !== req.param.item;
        });
        res.json(data);
    });
}