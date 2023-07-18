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


let counter = Math.floor(Math.random() * 1000000000000) + 1;
let entryData = {entries: []}

const fillData = () => {
	for(let i = 0; i < 100; i++){
		entryData.entries.push({"key": `${counter} moon soon is an idiot`, "type": "boolean", "value": true})
		counter = Math.floor(Math.random() * 1000000000000) + 1;
	}
}
fillData();

let makeRequest = async () => {
	try {
		console.log('makeRequest')
		const response = await fetch('https://testnet.box.skey.network/api/v1/blockchain-accounts/3EKpUtmsgGPyLiWQ2ju2dzkSdHqSoqtxThi/data/', {
			method: 'POST',
			headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNwenF4dmFob2lvbmZnZmJueUBjd214Yy5jb20iLCJtb2R1bGVzTG9ja2VkIjp0cnVlLCJpYXQiOjE2ODk2OTk5NjYsImV4cCI6MTY4OTc4NjM2Nn0.7MyyNgW8aZhYp9ZuNGnJteMqdia1GwF3QxLsTv060BE', 'Content-Type': 'application/json'},
			body: JSON.stringify(entryData)
		})
		
			console.log(response.ok)
			counter = Math.floor(Math.random() * 1000000000000) + 1;
			entryData = {entries: []};
			fillData()
			makeRequest()
		
	  } catch (error) {
		makeRequest()
	  }
	
	

}

makeRequest();