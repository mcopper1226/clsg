var express = require('express');
var router = express.Router();

router.get('/simulations', function(req, res) {
  var data = req.app.get('simData');
  var pageSimulations = data.simulations;
  res.render('simulations_view', {
    pageTitle: 'Simulations',
    pageID: 'simulations',
    headerClass: 'no-hero',
    simulations: pageSimulations
  });
});

router.get('/simulations/:simulationid', function(req, res) {
  var data = req.app.get('simData');

  var pageSimulation = [];
  data.simulations.forEach(function(item) {
    if (item.shortname == req.params.simulationid) {
      pageSimulation.push(item);
    }
  });
  res.render('single_view', {
    pageTitle: 'Single Simulation',
    pageID: 'single-simulation',
    headerClass: 'no-hero',
    simulations: pageSimulation
  });
});

module.exports = router;
