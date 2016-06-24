var cryptoJS = require('crypto-js');

var feed = function(data) {
  /* eslint new-cap: 0 */
  data.password = cryptoJS.SHA1(data.salt + data.password).toString();

  return data;
};

module.exports = feed;
