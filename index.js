import fetch from 'node-fetch';
import express from 'express';

const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) =>{
    res.status(200).json({status: 'ok'})
})

let counter = 1;


let makeRequest = async () => {
	const response = await fetch('https://testnet.api.box.skey.network/blockchain-accounts/3EKpUtmsgGPyLiWQ2ju2dzkSdHqSoqtxThi/data', {
	method: 'POST',
	headers: {'Authorization': 'jCdMsedLTo20oOKTdXJCkTWLXZdoN7fksx5YIIwW0Bg', 'Content-Type': 'application/json'},
	body: JSON.stringify({
		  "entries": [
		    {
		      "key": `${counter}. moon soon is troll`,
		      "type": "boolean",
		      "value": true
		    }
		  ]
		})
	})

	if(response.ok) {
        console.log('resposne ok')
		counter++;
		makeRequest()
	}

}

makeRequest();