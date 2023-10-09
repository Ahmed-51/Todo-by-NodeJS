var express = require('express');
var app = express();
var todocontroller = require('./controllers/todocontroller');

// setting ejs as template engine
app.set('view engine', 'ejs');

//handling requests of static files
app.use(express.static('./public'));

//fire controllers
todocontroller(app);


//ndoe listening to port 3000 for req.
app.listen(3000);