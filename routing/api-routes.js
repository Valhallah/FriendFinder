var bodyParser = require('body-parser');
var friends = require('../app/friends.js');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        return res.json(friends);
    });

    app.post('/api/friends', function(req, res) {

  		var match = {
  			name: "nomatch",
  			image: "nomatch",
  			matchDiff: 1000
  		};

  		var usrData 	= req.body;
  		var usrName 	= usrData.name;
  		var usrImage 	= usrData.image;
  		var usrScores 	= usrData.scores;

  		// for each friend
  		for(var friendNum = 0; friendNum < friends.length; friendNum++){
        // this friend
        var friendVar = friends[friendNum];
        // total difference for this friend
        var totalDiff = 0;
        // for each score
        for (var scoreNum = 0; scoreNum < usrScores.length; scoreNum++) {
          // calculate difference of this score
          var difference = usrScores[scoreNum] - friendVar.scores[scoreNum];
          // get absolute value
          var absoluteDifference = Math.abs(difference);
          // add to current difference for this friend
          totalDiff = totalDiff + absoluteDifference;
        }

        // if this friend is a closer match, update the match to this friend
        if (totalDiff < match.matchDiff) {
          match.name = friendVar.name;
          match.image = friendVar.photo;
          match.matchDiff = totalDiff;
        }
  		}


      // save this new friend
  		friends.push(usrData);

  		res.json(match);


    });

};
