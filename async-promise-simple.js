var rp = require('request-promise');

function printUsers(users) {
    console.log('Users Length:::', users.length);
    console.log(users);
}

rp('http://localhost:3070/users')
    .then(function (data) {
        printUsers(JSON.parse(data));})
    .catch(function (err) {
        console.log('Error:::', err);
    });