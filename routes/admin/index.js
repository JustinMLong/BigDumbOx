﻿var db = require('../../db');


exports.get = function (req, res) {
	res.render('admin/index');
}

exports.put = function (req, res) {
	if (req.param('call') == 'insertTeam') {
		console.log('insert team');
		db.addTeam(req.param('name'), +req.param('region'), +req.param('seed'), function (addedRow) {
			console.log(addedRow);
		});

	}

		
}
