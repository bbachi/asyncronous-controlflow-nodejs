var rp = require('request-promise');


function printUsers(users) {
    console.log('Users Length:::', users.length);
    console.log(users);
}


function printEmails(emails) {
    console.log('Emails Length:::', emails.length);
    console.log(emails);
}


function printAddresses(addresses) {
    const addrs = JSON.parse(addresses);
    console.log('Addresses Length:::', addrs.length);
    console.log(addrs);
}

function getLastName(data) {
    
    printUsers(JSON.parse(data));
    users = JSON.parse(data);
    var lastName = '';
    users.forEach(usr => {
        if(usr.lastName === 'last3') {
            lastName = usr.lastName;
        }})
        return lastName;
}


function getEmailAddress(data) {

    printEmails(JSON.parse(data));
    const email = JSON.parse(data)[0];
    return email.email;
}

async function seriesAsyncAwait() {

    try {
        const users = await rp('http://localhost:3070/users');
        const lastName = getLastName(users);

        const emails = await rp(`http://localhost:3070/user/email/${lastName}`);
        const email = getEmailAddress(emails);

        const addr = await rp(`http://localhost:3070/user/address/${email}`);
        printAddresses(addr);
    } catch(err) {
        console.log(err);
    }
    
}

seriesAsyncAwait();