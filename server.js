// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection 
mongoose.connection.on('connected', () => {
    console.log('Connected to database mongodb @ 27017');
})

//connection error
mongoose.connection.on('error', (err) => {
    if (err) console.log('Error in database connect ' + err);
})

//port no
const port = 3900;

//adding middleware - cors
app.use(cors());

//body parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//testing server
app.get('/', function(req, res) {
    res.send('Server Connected !!!');
})

app.listen(port, function() {
    console.log('Server connecting in port: ' + port);
})