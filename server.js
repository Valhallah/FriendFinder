const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'app/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//call the apiRoutes and htmlRoutes functions and pass in app
apiRoutes(app);
htmlRoutes(app);

//start
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
