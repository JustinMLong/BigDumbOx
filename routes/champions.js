db = require('../db');

exports.get = function (req, res) {
	db.champions.browse(function (rowList) {
		res.render('champions', {champions: rowList.rows});
	});
};