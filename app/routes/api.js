var express = require('express');
var router = express.Router();
var contactData = require('../data/contact.json');

router.get('/api', function(req, res) {
  res.json(contactData);
});


module.exports = router;
