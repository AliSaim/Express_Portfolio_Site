let express = require('express');
 let app = express();

 //create the port constant
const localPort = 3000;


//Get port from environment and store in express
let port = process.env.PORT || localPort;
app.set('port', port);

//start listening on the port
app.listen(port); 
console.log(`Server listening at port: ${port}`);


//ROUTING - mounted our routes

//second route is '/hello'
app.use('/hello',  (req, res, next) => {
    res.send("Hello World!");
});

//main route for the root
app.use('/',  (req, res, next) => {
    res.send("Welcome");
});
module.exports = app;