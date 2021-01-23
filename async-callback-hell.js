const request = require('request');


function printUsers(users) {
    console.log('Users Length:::', users.length);
    console.log(users);
}


function printEmails(emails) {
    console.log('Emails Length:::', emails.length);
    console.log(emails);
}


function printAddresses(addresses) {
    console.log('Addresses Length:::', addresses.length);
    console.log(addresses);
}


request('http://localhost:3070/users', function (error, response, body) {
  console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  printUsers(JSON.parse(body));
  const users = JSON.parse(body);
  users.forEach(usr => {
      if(usr.lastName === 'last3') {
        request(`http://localhost:3070/user/email/${usr.lastName}`, function (error, response, body) {
            console.error('error:', error); 
            console.log('statusCode:', response && response.statusCode); 
            printEmails(JSON.parse(body));
            const email = JSON.parse(body)[0];
            request(`http://localhost:3070/user/address/${email.email}`, function (error, response, body) {
                console.error('error:', error); 
                console.log('statusCode:', response && response.statusCode); 
                printAddresses(JSON.parse(body));
            });
        });
      }
  });
});



