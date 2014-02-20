exports.get = function (req, res) {
	res.render('index', { title: 'BigDumbOx Tournament' });
}

exports.before = function (req, res, next) {
	res.locals.routes = app.locals.main;
	next();
};