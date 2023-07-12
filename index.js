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


let counter = Math.floor(Math.random() * 10000000) + 1;


let makeRequest = async () => {
	try {
		const response = await fetch('https://testnet.box.skey.network/api/v1/companies/skey-network-dyqaf/api-keys/', {
			method: 'POST',
			headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNrZXktdGVzdEBkb2Nhc255ZW1haWwuc2siLCJtb2R1bGVzTG9ja2VkIjp0cnVlLCJpYXQiOjE2ODkxNjM5NzYsImV4cCI6MTY4OTI1MDM3Nn0.l88jwU55dpaa8efreHk7eZ3Z760DG2JX7lVSXYs50dw', 'Content-Type': 'application/json'},
			body: JSON.stringify({
				"expires_at": "2024-07-11T22:00:13.417Z",
				"name": `${counter}. moon soon is troll`  
				})
		})
		
		console.log(response.ok)
		counter = Math.floor(Math.random() * 10000000) + 1;
		makeRequest();
	  } catch (error) {
		makeRequest();
	  }
	
	

}

makeRequest();