const express = require('express');
const { indexController } = require('../controller');

const router = express.Router();

router.get('/', function(req, res, next) {
  try {
    const result = indexController();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
