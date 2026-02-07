// Import the required modules
const express = require('express');
// From the excellent https://github.com/amida-tech/blue-button project.
const bb = require("@amida-tech/blue-button")

// Create an express app
const app = express();

// Use express middleware for parsing JSON and urlencoded data
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

// Define the route for POST request at /bb
app.post('/bb', (req, res) => {
    try {
        // Decode the CDA from base64 format and parse it
        const cdaxml = Buffer.from(req.body.cda.replace(/[\r\n]+/g, ''), 'base64').toString('utf8');
        const cdajson = JSON.stringify(bb.parse(cdaxml))

        // Prepare response
        let response = {
            cda_json: cdajson
        }

        // Send response with status 200
        res.status(200).json(response)
    }
    catch (error) {
        // Send error response with status 400
        res.status(400).json({ error: error.message })
    }
});

// Start the server at port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
