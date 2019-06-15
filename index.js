const mongoose = require('mongoose');
const config = require('./src/config');
require('./src/model/Thing');
const app = require('./src/app');

// Making environment variables available to the rest of the application
require('dotenv').config({ path: '.env' });

// connect to your db
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 Promises
mongoose.connection.on('error', err => {
  // eslint-disable-next-line no-console
  console.log(`ERROR OCCURED: ${err.message}`);
});

app.listen(config.express.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express running on port ${config.express.port}`);
});
