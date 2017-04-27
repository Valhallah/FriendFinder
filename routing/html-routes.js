var path = require('path');

module.exports = function(app) {

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    app.get('/public/style_home.css', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/style_home.css'));
    });

    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/home.html'));
    });
};
