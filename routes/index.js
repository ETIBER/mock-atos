var express = require('express');
var router = express.Router();
var ssd = require('./ssd.json')
var ssd20180602 = require('./ssd20180602.json')
var thd = require('./thd.json')
var statsset = require('./statsset.json')
var statsservices = require('./statsservices.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/generation/flow/fr/resultats/infoplayer/ssd/20180521', function(req, res, next) {
  res.send(ssd);
});

router.get('/generation/flow/fr/resultats/infoplayer/ssd/20180602', function(req, res, next) {
  res.send(ssd20180602);
});

router.get('/generation/flow/fr/QM078/infoplayer/thd/infos', function(req, res, next) {
  res.send(thd);
});

router.get('/generation/flow/fr/QM078/statsset', function(req, res, next) {
  res.send(statsset);
});

router.get('/generation/flow/fr/QM078/statsservices', function(req, res, next) {
  res.send(statsservices);
});

module.exports = router;
