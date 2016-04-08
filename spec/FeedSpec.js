describe('Feed', function() {
    var Feed = require('../server/feed.js'),
        CryptoJS = require('crypto-js'),
        data = {
            password: 'asdfghjkl1234567890',
            description: 'This is a data test',
            quantity: '9',
        },
        salt = '',
        responseData = {};

    beforeEach(function() {
        responseData = Feed(data);
        salt = responseData.salt;
    });

    it('should send the salt', function() {
        expect(salt).not.toBe(undefined);
    });

    it('should encrypt the password', function() {
        expect(responseData.password).toBe(CryptoJS.SHA1(salt + data.password).toString());
    });

    it('should return data', function() {
        var testData = {
            password: CryptoJS.SHA1(salt + data.password).toString(),
            description: 'This is a data test',
            salt: salt,
            quantity: '9',
        };
        expect(responseData).toEqual(testData);
    });
});
