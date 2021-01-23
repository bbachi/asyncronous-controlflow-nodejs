function add(a, b) {
    return setTimeout(function() {
        return a + b;
    }, 10000);
}

module.exports = add;