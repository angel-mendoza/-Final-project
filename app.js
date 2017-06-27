const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


mongoose.connect(config.database);
//mongoose.Promise = global.Promise;
mongoose.connection.on('connected',()=>{
 	console.log("connected are your database: "+config.database);
 });

mongoose.connection.on('error',(err)=>{
 	console.log("database error: "+ err);
 });


const users = require('./routes/users');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.get('/',(req , res)=>{
 	res.send("landing");
});

app.use('/users',users);

app.listen( port, ()=>{
	console.log("Server running on port: "+port);	
});