const express = require('express');
const mongoose = require('mongoose');

const Thing = mongoose.model('Thing');

const router = express.Router();

router.get('/', async function(_, res, next) {
  try {
    const thing = new Thing({ name: 'Thing Name', description: 'All the things' });
    await thing.save();
    res.status(200).json('it is done');
  } catch (err) {
    next(err);
  }
});

router.get('/list', async function(_, res, next) {
  try {
    res.status(200).json('a list will appear');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
