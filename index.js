//filename index.js
//import express
let express = require('express');
//import mongoose
let mongoose = require('mongoose');
//import body parser
let bodyParser = require('body-parser');
//import Routes
let apiRoutes = require('./api-routes.js');

//initialize app
let app = express();

//bodyParser Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//connect mongoose and set connection variable
mongoose.connect('mongodb://localhost/tugas_3_nodejs');

var db = mongoose.connection;

//setupserver
var PORT = process.env.PORT || 8082;

//Lauched app greetings
app.listen(PORT, ()=>{console.log(`Server berjalan di PORT ${PORT}`)});

//send message for default url
app.get('/',(req,res)=>res.send('Selamat Datang di Server Data Siswa'));

//app apiRoutes
app.use('/api', apiRoutes);
