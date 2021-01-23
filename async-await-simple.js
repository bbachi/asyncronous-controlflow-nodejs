var rp = require('request-promise');

async function fetchData() {
    const data = await rp('http://localhost:3070/users');
    console.log(JSON.parse(data));
}

fetchData().catch(err => console.log(err));