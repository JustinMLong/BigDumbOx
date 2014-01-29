var config = require('../config');
var posgres = require('pg.js');

posgres.connect(config.development.database, function (err, client, done) {
	
	
	
});