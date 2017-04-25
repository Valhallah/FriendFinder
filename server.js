const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const htmlRoutes = require('./routing/html-routes');
const apiRoutes = require('./routing/api-routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'app/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
