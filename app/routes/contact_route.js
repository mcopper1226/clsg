var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res) {

  res.render('contact_view', {
    pageTitle: 'Contact Us',
    pageID: 'contact',
    headerClass: 'no-hero'
  });

});

module.exports = router;
