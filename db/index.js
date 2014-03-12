var config = require('../config');
var posgres = require('pg.js');
var queries = require('./queries.json');

posgres.connect(config.development.database, function (err, client, done) {
	Object.keys(queries).forEach(function (table) {
		exports[table] = {};
		
		Object.keys(queries[table]).forEach(function (query) {

			if (Array.isArray(queries[table][query]))
				queries[table][query] = queries[table][query].join();



			exports[table][query] = function () {
				var args = Array.prototype.slice.call(arguments, 0, -1);
				var cb = Array.prototype.slice.call(arguments, -1)[0];
				return client.query({ text: queries[table][query], values: args }, function (err, result) {
					return cb(result);
				});
			};
		});
	});
	
});