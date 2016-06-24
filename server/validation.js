var makeSalt = function() {
  var text = "";
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz' +
    '0123456789' +
    '~!@#$%^&*()_+?';

  for (var i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
module.exports = {
  /**
   * Validate a given address as a valid Google Maps address
   * @param {string}   password Object with one of the "locations" array data.
   * @param {Function} callback The callback that will be called when the
   * validation finishes. The callback parameters are a Boolean, that responds
   * if it's valid and an Object with the response data
   */
  moblet: function(password, callback) {
    var response = {
      data: {
        salt: makeSalt()
      }
    };
    callback(true, response);
  }
};
