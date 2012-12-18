var zoo = {
    a: 'ant',
    b: 'bat',
    c: 'cat',
    d: 'dog',
    e: 'elephant',
    f: 'frog',
    g: 'giraffe',
    h: 'horse',
    i: 'iguana',
    j: 'jaguar',
    k: 'koala',
    l: 'llama',
    m: 'mouse',
    n: 'newt',
    o: 'octopus',
    p: 'platypus',
    q: 'quail',
    r: 'rat',
    s: 'snake',
    t: 'tiger',
    u: 'urial',
    v: 'vole',
    w: 'walrus',
    x: 'xantis',
    y: 'yak',
    z: 'zebra'
};

module.exports = function isauthenticated(username, password) {
    var cryptozoologicalName = zoo[username[0]] + zoo[username[1]] + zoo[username[2]];
    var authenticated = false;
    if(password === cryptozoologicalName) {
        authenticated = true;
    }

    return authenticated;
};