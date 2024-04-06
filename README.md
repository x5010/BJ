# Blackjack Game

This is a simple implementation of the classic card game Blackjack (also known as 21) using HTML, CSS, and JavaScript.

## Description

This project consists of a web-based Blackjack game where the player can interact with the game by clicking buttons to start the game, draw cards, and stand. The game logic is implemented in JavaScript, and the interface is built using HTML and styled with CSS.

## Features

- Start the game with a deck of shuffled cards.
- Draw cards for the player and the dealer.
- Calculate the total value of the player's and dealer's hands.
- Implement game actions such as hitting and standing.
- Determine the winner based on game rules.

## Technologies Used

- HTML: Used for creating the structure of the game interface.
- CSS: Used for styling the game interface.
- JavaScript: Used for implementing the game logic.
- Express.js: Used for serving static files and setting up endpoints for the game.
- Node.js: Used for running the server.

## How to Run the Server

1. Make sure you have Node.js installed on your system. If not, you can download and install it from [Node.js official website](https://nodejs.org/).
2. Open a terminal or command prompt.
3. Navigate to the directory where your server file (`server.js`) is located.
4. Run the following command to install the necessary dependencies (assuming you have a `package.json` file with dependencies listed):
npm install
5. After installing dependencies, you can start the server by running:
node server.js
6. Once the server is running, it will be listening on the specified port (which is defined in your `server.js` file, often `3001` by default). You can access your Blackjack game by opening a web browser and navigating to `http://localhost:3001/blackjack` or the appropriate URL if you've configured a different port.

## Credits

This project was created by Elisson.

## License

This project is licensed under the [MIT License](LICENSE).
