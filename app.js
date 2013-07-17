var http = require('http');
var express = require('express');
var stylus = require('stylus');
var i18n = require('i18n');
var routes = require('./routes');

var app = express();

i18n.configure({
	locales:['en'],
	defaultLocale: 'en',
	directory: __dirname + '/i18n',
	updateFiles: false
});

app.configure(function () {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');

	app.use(express.logger('dev'));
	app.use(express.favicon());
	app.use(stylus.middleware({
		src: __dirname + '/stylsheets',
		dest: __dirname + '/public',
		compress: true
	}));
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.methodOverride());
	app.use(i18n.init);
	app.use(app.router);
});

app.configure('development', function () {
	app.use(express.errorHandler());
});

routes.init({app: app});

http.createServer(app).listen(3000);

console.log('Express server listening on port 3000');
