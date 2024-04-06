const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/postav.su/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/postav.su/fullchain.pem')
};

const app = express();

// Serve static files from the public directory
app.use(express.static('public'));
// Serve static files from the images directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Настройка эндпоинта для игры в блэкджек
app.get('/blackjack', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blackjack.html'));
});

// Start the server
const PORT = process.env.PORT || 3001;

// Create HTTPS server with the provided options
https.createServer(options, app).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
