var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('helloworld', { title: 'Express' });
});

module.exports = router;

/* GET Hello World page. */
// On définit une route qui fait appel a une callback qui va etre executéée lors du chargement de cette page
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
  });