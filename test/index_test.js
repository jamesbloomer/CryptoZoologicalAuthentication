var assert = require('assert'),
    mocha = require('mocha'),
    cza = require('..\/');

describe('CryptoZoologicalAuthentication', function(){
    it('invalid password should return false', function(){
        assert.equal(cza("ike", "wrong"), false);
        assert.equal(cza("dave", "password"), false);
        assert.equal(cza("sarah", "1234"), false);
        assert.equal(cza("dave", "secret"), false);
    });
    
    it('correct password should return true', function(){
        assert.equal(cza("ike", "iguanakoalaelephant"), true);
        assert.equal(cza("abc", "antbatcat"), true);
        assert.equal(cza("def", "dogelephantfrog"), true);
        assert.equal(cza("keith", "koalaelephantiguana"), true);
        assert.equal(cza("dave", "dogantvole"), true);
        assert.equal(cza("sarah", "snakeantrat"), true);
    });
});