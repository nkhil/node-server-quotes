const config = require('./src/config');
const app = require('./src/app');

// Making environment variables available to the rest of the application
require('dotenv').config({ path: '.env' });

app.listen(config.express.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express running on port ${config.express.port}`);
});
