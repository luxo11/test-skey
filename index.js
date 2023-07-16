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
		console.log('makeRequest')
		const response = await fetch('https://testnet.box.skey.network/api/v1/blockchain-accounts/3EKpUtmsgGPyLiWQ2ju2dzkSdHqSoqtxThi/data/', {
			method: 'POST',
			headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vZ2VkNTUxNzRAbmFzc2thci5jb20iLCJtb2R1bGVzTG9ja2VkIjp0cnVlLCJpYXQiOjE2ODk1MTUyNTAsImV4cCI6MTY4OTYwMTY1MH0.qSLLTiiQGPXIXLI6TyklSJ0e_kS4zz2dPTNGvRJpeuI', 'Content-Type': 'application/json'},
			body: JSON.stringify({
				"entries": [
				  {
					"key": `${counter}. moon soon is an idiot`,
					"type": "boolean",
					"value": true
				  }
				]
			  })
		})
		
			console.log(response.ok)
			counter = Math.floor(Math.random() * 100000000000) + 1;
			setTimeout(makeRequest,40000)
		
	  } catch (error) {
		makeRequest();
	  }
	
	

}

makeRequest();