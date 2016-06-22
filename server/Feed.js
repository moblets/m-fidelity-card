var cryptoJS = require('crypto-js');

var feed = function(data) {
  return {
    /* eslint new-cap: 0 */
    password: cryptoJS.SHA1(data.salt + data.password).toString(),
    salt: data.salt,
    description: data.description,
    quantity: data.quantity
  };
};

module.exports = feed;
