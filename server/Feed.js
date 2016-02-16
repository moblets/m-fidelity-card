// node com o feed
var CryptoJS = require('crypto-js');

var feed = function(data) {

    // data com os dados definidos no apper config
    // data.password
    // data.description
    // data.quantity

    var salt = "87e460qv34[tmqu pcu[w3-5o]]";

    return {
        password: CryptoJS.SHA1(salt + data.password).toString(),
        salt: salt,
        description: data.description,
        quantity: data.quantity
    };

};


module.exports = feed;
