var express = require('express');
var app = express();
var data = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('simData', data);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Center for Leadership Simulation and Gaming';
app.locals.allSimulations = data.simulations;

app.use(express.static('app/public'));
app.use(require('./routes/index_route'));
app.use(require('./routes/simulations_route'));



var server = app.listen(app.get('port'), function() {
  console.log("Server running on port" + app.get('port'));
});
