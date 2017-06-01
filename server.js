var express = require('express'),
    bodyParser = require('body-parser'),
    api = require('./app/routes/classApi'),
    config = require('./config'),
	cors = require('cors');
var app = express();

app.use(cors());
var http = require('http').Server(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());






app.post('/api',api.api);
app.use(express.static(__dirname + '/public'));
app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/index.html'); 
});



http.listen(config.port, function(err){
    if (err)
        console.log(err);
    else
        console.log("Listenning on port ",config.port);
});
