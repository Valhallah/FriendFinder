var bodyParser = require('body-parser');
var friendsArr = require('../app/friends.js');

module.exports = function(app) {

  app.listen(PORT, function () {
  	console.log('App listening on PORT ' + PORT);
  });

  app.get('/api/friends', function(req, res){
    return res.json(friendsArr);
  });



};
