const { When, Then } = require('cucumber');
const chai = require('chai');
const rp = require('request-promise');
const config = require('../../src/config');

chai.should();

When('I call {string} {string}', async function(method, path) {
  this.response = await rp({
    url: `${config.url}${path}`,
    method,
    resolveWithFullResponse: true
  });
});

Then('the application should return the status code, {int}', function(statusCode) {
  this.response.statusCode.should.equal(statusCode);
});
