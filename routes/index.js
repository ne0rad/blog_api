var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('Received GET request');
});

router.post('/', function(req, res, next) {
  res.send('Received POST request');
});

router.get('/articles/:articleID', (req, res) => {
  res.send('GET request for article ID: ' + req.params.articleID);
});


module.exports = router;
