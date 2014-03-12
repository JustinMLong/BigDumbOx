var db = require('../../db');


exports.get = function (req, res) {
	db.champions.browse(function(rowset) {
		res.render('admin/champions');

	})
	
}


exports.post = function (req, res) {
	db.champions.add(+req.body["year"], req.body["champion"], req.body["runner-up"], function (addedRow) {
		console.log(addedRow);
	} );


}