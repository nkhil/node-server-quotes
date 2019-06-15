const mongoose = require('mongoose');
require('./src/model/Thing');
require('./src/model/Quote');
const app = require('./src/app');

// Making environment variables available to the rest of the application
require('dotenv').config({ path: '.env' });

// connect to your db
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 Promises
mongoose.connection.on('error', err => {
  // eslint-disable-next-line no-console
  console.log(`\nAN ERROR OCCURED ======> ${err.message}`);
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express running on port ${process.env.PORT}`);
});
