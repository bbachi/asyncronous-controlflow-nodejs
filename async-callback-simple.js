const request = require('request');


function printUsers(users) {
    console.log('Users Length:::', users.length);
    console.log(users);
}



request('http://localhost:3070/users', function (error, response, body) {
  console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  printUsers(JSON.parse(body));
});

