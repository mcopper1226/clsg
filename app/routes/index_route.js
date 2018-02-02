var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  var data = req.app.get('simData');
  var pageSimulations = data.simulations;

  res.render('index_view', {
    pageTitle: 'Home',
    pageID: 'home',
    simulations: pageSimulations,
    headerClass: 'no-hero'
  });
});

module.exports = router;
