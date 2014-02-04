var config = require('../config');
var posgres = require('pg.js');
var queries = require('./queries.json');

posgres.connect(config.development.database, function (err, client, done) {
	Object.keys(queries).forEach(function(query) {
		exports[query] = function ( ) {
			var args = Array.prototype.slice.call(arguments, 0, -1);
			var cb = Array.prototype.slice.call(arguments, -1)[0];
			return client.query({ text: queries[query], values: args }, function (err, result) {
				return cb(result);
			});
		};
	})
	
});