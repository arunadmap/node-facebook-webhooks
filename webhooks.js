// GET route to register the callback URL with Facebook.
app.get('/webhook', (req, res) => {
	const VERIFY_TOKEN = "random string"
	// Parse the query params
	const mode = req.query['hub.mode'];
	const token = req.query['hub.verify_token'];
	const challenge = req.query['hub.challenge'];

	// Checks if a token and mode is in the query string of the request
	if (mode && token) {

	// Checks the mode and token sent is correct
	if (mode === 'subscribe' && token === VERIFY_TOKEN) {

	  // Responds with the challenge token from the request
	  console.log('WEBHOOK_VERIFIED');
	  res.status(200).send(challenge);

	} else {
	// Responds with '403 Forbidden' if verify tokens do not match
	  res.sendStatus(403);      
		}
	}
})

// POST route to handle webhook calls.
app.post('/webhook', (req, res) => {
	try {
		console.log(req.body);
	}
	catch(error) {
		console.error(error);
	}
})