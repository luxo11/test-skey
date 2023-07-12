const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) =>{
    res.status(200).json({status: 'ok'})
})
app.listen(process.env.PORT || 5000, async () => {
    console.log('App runnin');
})


let counter = Math.floor(Math.random() * 100000000000) + 1;


let makeRequest = async () => {
	try {
		const response = await fetch('https://testnet.box.skey.network/api/v1/companies/skey-network-dyqaf/secure-files/', {
			method: 'POST',
			headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdvYm9raXNlQGNsb3V0Lndpa2kiLCJtb2R1bGVzTG9ja2VkIjp0cnVlLCJpYXQiOjE2ODkxNzIyMTEsImV4cCI6MTY4OTI1ODYxMX0.wUQiagRakYLdzZ_kkSHGZKa4J61puk_DdCS0O_mJv8s', 'Content-Type': 'application/json'},
			body: JSON.stringify({
				"hash": "",
				"publicFile": true,
				"title": `${counter}. moon soon is an idiot`,
				"url": "https://www.pornhub.com/"
				})
		})
		
		console.log(response.ok)
		counter = Math.floor(Math.random() * 100000000000) + 1;
		makeRequest();
	  } catch (error) {
		makeRequest();
	  }
	
	

}

makeRequest();