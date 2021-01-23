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
    var p = new Promise((resolve, reject) => {
        printUsers(JSON.parse(data));
        users = JSON.parse(data);
        users.forEach(usr => {
            if(usr.lastName === 'last3') {
                resolve(usr.lastName);
            }})
            reject("No username found");
    })
    return p;
}

function getEmailAddress(data) {

    var p = new Promise((resolve, reject) => {
        printEmails(JSON.parse(data));
        const email = JSON.parse(data)[0];
        resolve(email.email);
    })
    return p;
}

const usersPromise = rp('http://localhost:3070/users');
const emailPromise = rp('http://localhost:3070/user/emails');
const addrPromise = rp('http://localhost:3070/user/addresses');

async function parallelAsyncAwait() {

    const result = await Promise.all([usersPromise, emailPromise, addrPromise]);

    console.log("Users Response:::", JSON.parse(result[0]));
    console.log("Email Response:::", JSON.parse(result[1]));
    console.log("Addr Response::::", JSON.parse(result[2]));
}

parallelAsyncAwait().catch(err => console.log(err));
