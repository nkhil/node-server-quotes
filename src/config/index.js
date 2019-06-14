module.exports = {
  express: {
    port: parseInt(process.env.EXPRESS_PORT, 10) || 3000
  },
  // defines the application environment
  environment: process.env.ENVIRONMENT,
  project: process.env.NAME || 'node_db'
};
