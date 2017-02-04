let express = require('express');
 let app = express();

 //create the port constant
const port = 3000;

//start listening on the port
app.listen(port);
console.log(`Server listening at port:   ${port}`);

//ROUTING - mounted our routes

//second route is '/hello'
app.use('/hello',  (req, res, next) => {
    res.end("Hello world!");

  next();
});

//main route for the root
app.use('/',  (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome");

  next();
});