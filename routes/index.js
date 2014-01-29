module.exports = function (app) {
	var fs = require('fs');

	var routeList = fs.readdirSync(__dirname);
	var routes = [];

	routeList.forEach(function (file) {
		if (file.toLowerCase() == 'index.js')
			return;

		var route = require('./' + file);
		var routeName = file.replace('.js', '');
		routes.push(routeName);

		Object.keys(route).forEach(function(method) {
			app[method]('/' + routeName, route[method]);
		});

	});

	exports.index = {
		get: function (req, res) {
			res.render('index', { title: 'BigDumbOx Tournament' });
		}
	}

	app.set('routes', routes);

	app.get('/', exports.index.get);
};