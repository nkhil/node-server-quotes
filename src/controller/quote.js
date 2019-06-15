const mongoose = require('mongoose');
const quotes = require('../data/quotes.json');

const Quote = mongoose.model('Quote');

function randomQuote() {
  const quote = Quote.aggregate([{ $sample: { size: 1 } }]);
  return quote;
}

async function quoteInjestor() {
  const newQuotes = quotes.slice(11, -1);
  newQuotes.map(async arrayQuote => {
    const quote = new Quote({
      quoteText: arrayQuote.quoteText,
      quoteAuthor: arrayQuote.quoteAuthor
    });
    const result = await quote.save();
    return result;
  });
}

module.exports = {
  randomQuote,
  quoteInjestor
};
