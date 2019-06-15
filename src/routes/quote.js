const express = require('express');
const { randomQuote } = require('../controller/quote');

const router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    const result = await randomQuote();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
