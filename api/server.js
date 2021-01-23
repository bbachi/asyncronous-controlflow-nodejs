const express = require("express");
const port = 3070;
const app = express();

const users = [
    {
        firstName: 'first1',
        lastName: 'last1',
    },
    {
        firstName: 'first2',
        lastName: 'last2',
    },
    {
        firstName: 'first3',
        lastName: 'last3'
    }
]

const emails = [
    {
        firstName: 'first1',
        lastName: 'last1',
        email: 'abc1@gmail.com'
    },
    {
        firstName: 'first2',
        lastName: 'last2',
        email: 'abc2@gmail.com'
    },
    {
        firstName: 'first3',
        lastName: 'last3',
        email: 'abc3@gmail.com'
    }
]

const addresses = [
    {
        email: 'abc1@gmail.com',
        address: {
            streetNumber: "stnum1",
            streetName: "stname1",
            city: "city1",
            state: "state1",
            zipcode: "zipcode1"
        }
    },
    {
        email: 'abc2@gmail.com',
        address: {
            streetNumber: "stnum2",
            streetName: "stname2",
            city: "city2",
            state: "state2",
            zipcode: "zipcode2"
        }
    },
    {
        email: 'abc3@gmail.com',
        address: {
            streetNumber: "stnum3",
            streetName: "stname3",
            city: "city3",
            state: "state3",
            zipcode: "zipcode3"
        }
    }
]

app.get("/users", (req, res) => {
    res.json(users);
})

app.get("/user/emails", (req, res) => {
    res.json(emails);
})

app.get("/user/email/:lastName", (req, res) => {
    const lastName = req.params.lastName;
    const email = emails.filter(email => email.lastName === lastName);
    res.json(email);
})

app.get("/user/addresses", (req, res) => {
    res.json(addresses);
})

app.get("/user/address/:email", (req, res) => {
    const email = req.params.email;
    console.log('email::::', email);
    const address = addresses.filter(addr => addr.email === email);
    res.json(address);
})


app.listen(port, () => {
    console.log('Listening on the server port ', port)
});