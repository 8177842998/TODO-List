
//in terminal run npm i mongoose@6.8.4 

const mongoose = require('mongoose');

//connect to the database
// mongoose.connect('mongodb://localhost/TODO_App_db');


// mongoose.connect('mongodb://127.0.0.1:27017/TODO_App_db');
mongodb://localhost:27017/
mongoose.connect('mongodb://127.0.0.1:27017/TODO_App_db');

//acquire the connection(to check if it's successful)
// aquire the connection (to check if it is successful)
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, "Error in connecting to MongoDB"));

// up and running then print the message
db.once('open', function(){
    console.log('Connected to Database');
});

// exporting the database
module.exports = db;