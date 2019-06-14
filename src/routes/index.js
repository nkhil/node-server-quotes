const express = require('express');

const router = express.Router();

router.get('/', function(req, res, next) {
  try {
    res.status(200).json('hello, world');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
