
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'BigDumbOx Tournament', routes: Object.keys(exports) });
	console.log(exports);
	console.log(Object.keys(exports));
};

exports.rules = function (req, res) {
	res.render('rules', { title: 'BigDumbOx Tournament Rules', routes: Object.keys(exports) });
};

exports.champions = function (req, res) {
	res.render('champions', { title: 'BigDumbOx Tournament Rules', routes: Object.keys(exports) });
};

exports.participants = function (req, res) {
	res.render('participants', { title: 'BigDumbOx Tournament Rules', routes: Object.keys(exports) });
};

exports.scoring = function (req, res) {
	res.render('scoring', { title: 'BigDumbOx Tournament Rules', routes: Object.keys(exports) });
};

exports.signup = function (req, res) {
	res.render('signup', { title: 'BigDumbOx Tournament Rules', routes: Object.keys(exports) });
};

exports.standings = function (req, res) {
	res.render('standings', { title: 'BigDumbOx Tournament Rules', routes: Object.keys(exports) });
};