module.exports = function (app) {
	var fs = require('fs');

	var routeList = fs.readdirSync(__dirname);
	var routes = [];

	routeList.forEach(function (file) {

		var route = require('./' + file);
		var routeName = file.replace('.js', '');
		routes.push(routeName);

		Object.keys(route).forEach(function(method) {
			app[method]('/' + routeName, route[method]);
		});

	});

	routes = routes.filter(function (route) { return !/(admin)|(index)/i.test(route); });

	exports.index = {
		get: function (req, res) {
			res.render('index', { title: 'BigDumbOx Tournament' });
		}
	}

	app.set('routes', routes);

	app.get('/', exports.index.get);
};