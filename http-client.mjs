import https from "https";

const endpoint = "https://eos7xcaq997xq2r.m.pipedream.net";
const request = https.request(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
},(response) => {
    response.addListener('data', (data) => {
        console.info(`receive data : ${data.toString()}`)
    })
});


const body = JSON.stringify({
    firstName : 'muhammad',
    lastName : 'akbar'
})
request.write(body);
request.end();