var bodyParser = require('body-parser');
var friends = require('../app/friends.js');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        return res.json(friends);
    });

    app.post('/api/friends', function(req, res){

		var match = {
			name: "",
			image: "",
			matchDiff: 100
		};
		var usrData 	= req.body;
		var usrName 	= usrData.name;
		var usrImage 	= usrData.image;
		var usrScores 	= usrData.scores;

		var totalDiff = 0;

		//loop through the friends data array of objects to get each friends scores
		for(var i = 0; i < [friends].length-1; i++){
			console.log(friends[i].name);
			totalDiff = 0;

			for(var j = 0; j < 10; j++){

				totalDiff += Math.abs(parseInt(usrScores[j]) - parseInt(friends[i].scores[j]));

				if (totalDiff <= match.friendDiff){

	
					match.name = friends[i].name;
					match.photo = friends[i].photo;
					match.matchDiff = totalDiff;
				}
			}
		}

		friends.push(usrData);

		res.json(match);



    });

};
