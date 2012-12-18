var assert = require('assert'),
    cza = require('..\/');

var invalid_password_should_return_false = function() {
    assert.equal(cza("Ike", "wrong"), false);
};

var correct_password_should_return_true = function() {
    assert.equal(cza("Ike", "iguanakoalaelephant"), true);
};