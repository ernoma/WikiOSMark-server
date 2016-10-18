var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var request = require('request');
var qs = require('querystring');

var oauth =
    { consumer_key: "4ed3c700d3df91a570522d09bcac8682",
      consumer_secret: process.env.WIKI_CONSUMER_SECRET,
      token: "19c2164a3ed7e9ad2467a85eb9e96f34",
      token_secret: process.env.WIKI_TOKEN_SECRET
    }


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res, next) {
    res.send('Hello World!');
});

app.get('/wikipedia/w/api.php', function(req, res, next) {
    console.log(req.url);
    console.log(req.query);
    console.log(req.body);

    var wikiServer = "https://test.wikipedia.org";
    var urlParts = req.url.split('/');
    var url = wikiServer;
    for (var i = 2; i < urlParts.length; i++) {
	url += "/" + urlParts[i];
    }

    request.get({url: url, oauth: oauth}, function(err, httpResponse, body) {
	console.log(err);
	//console.log(httpResponse);
	console.log(body);
	res.json(JSON.parse(body));
    });
});

app.post('/wikipedia/w/api.php', function(req, res, next) {
    console.log(req.url);
    console.log(req.query);
    console.log(req.body);
    var wikiServer = "https://test.wikipedia.org";
    var urlParts = req.url.split('/');
    var url = wikiServer;
    for (var i = 2; i < urlParts.length; i++) {
	url += "/" + urlParts[i];
    }

    console.log(url);
    
    request.post(url, {oauth: oauth, form: {
	    token: req.body.headers.data.token
	}
    }, function(err, httpResponse, body) {
	console.log(err);
	//console.log(httpResponse);
	console.log(body);
	res.json(JSON.parse(body));
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
