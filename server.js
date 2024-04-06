// Import required modules
const fs = require('fs'); // Import the file system module
const https = require('https'); // Import the HTTPS module
const express = require('express'); // Import the Express.js module
const path = require('path'); // Import the Path module

// Specify SSL certificate options
const options = {
  key: fs.readFileSync('path/to/privkey.pem'), // Specify the path to the SSL private key
  cert: fs.readFileSync('path/to/fullchain.pem') // Specify the path to the SSL certificate chain
};

const app = express(); // Create an instance of Express.js

// Serve static files from the public directory
app.use(express.static('public')); // Serve static files from the 'public' directory
// Serve static files from the images directory
app.use('/images', express.static(path.join(__dirname, 'images'))); // Serve static files from the 'images' directory

// Configure an endpoint for the blackjack game
app.get('/blackjack', (req, res) => { // Define an endpoint for the '/blackjack' route
    res.sendFile(path.join(__dirname, 'public', 'blackjack.html')); // Send the 'blackjack.html' file when the endpoint is accessed
});

// Start the server
const PORT = process.env.PORT || 3001; // Set the port number for the server
// Create an HTTPS server with the provided options and start listening on the specified port
https.createServer(options, app).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log a message indicating that the server is running and listening on the specified port
});
