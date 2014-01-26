
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'BigDumbOx Tournament' });
};


exports.rules = function (req, res) {
	res.render('rules', { title: 'BigDumbOx Tournament Rules' });
};

exports.champions = function (req, res) {
	res.render('champions', { title: 'BigDumbOx Tournament Rules' });
};

exports.participants = function (req, res) {
	res.render('participants', { title: 'BigDumbOx Tournament Rules' });
};

exports.scoring = function (req, res) {
	res.render('scoring', { title: 'BigDumbOx Tournament Rules' });
};

exports.signup = function (req, res) {
	res.render('signup', { title: 'BigDumbOx Tournament Rules' });
};

exports.standings = function (req, res) {
	res.render('standings', { title: 'BigDumbOx Tournament Rules' });
};

exports.user = function (req, res) {
	res.render('user', { name: { first: "Justin", nick: "it ain't that", last: "Long" }, teams: null });
}