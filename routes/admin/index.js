﻿var db = require('../../db');

exports.get = function (req, res) {
	db.getRegions(function (regionList) {
		res.render('admin', { regions: regionList.rows } );
	});
}

exports.post = function (req, res) {
	if (req.param('call') == 'insertTeam') {
		console.log('insert team');
		db.addTeam(req.param('name'), +req.param('region'), +req.param('seed'), function (addedRow) {
			console.log(addedRow);
		});

	}

		
}