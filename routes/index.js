
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'BigDumbOx Tournament' });
};


exports.rules = function (req, res) {
	res.render('rules', { title: 'BigDumbOx Tournament Rules' });
};