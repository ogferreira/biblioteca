var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('Legal');
});

router.get('/ifc', function(req, res, next) {
  res.send('Bem-vindo ao IFC');
});

router.get('/cool/beach', function(req, res, next) {
  res.send('Eu amo praia');
});

module.exports = router;
