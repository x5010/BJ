let deck = [];
let playerHand = [];
let dealerHand = [];
let output = document.getElementById('output');
let playerHandDiv = document.getElementById('player-hand');
let dealerHandDiv = document.getElementById('dealer-hand');

function startGame() {
    deck = createDeck();
    shuffle(deck);
    playerHand = [drawCard(), drawCard()];
    dealerHand = [drawCard(), drawCard()];
    renderHands();
    output.innerHTML = "Карты игрока: " + cardToString(playerHand) + "<br/>Карты дилера: " + getRankName(dealerHand[0].rank) + " " + getSuitName(dealerHand[0].suit) + ", ?";
}





function cardToString(hand) {
    let cardsString = hand.map(card => `${getRankName(card.rank)} ${getSuitName(card.suit)}`).join(", ");
    let handValue = getHandValue(hand);
    return `${cardsString} (${handValue})`;
}


function getRankName(rank) {
    switch (rank) {
        case '2': return 'Двойка';
        case '3': return 'Тройка';
        case '4': return 'Четвёрка';
        case '5': return 'Пятёрка';
        case '6': return 'Шестёрка';
        case '7': return 'Семёрка';
        case '8': return 'Восьмёрка';
        case '9': return 'Девятка';
        case '10': return 'Десятка';
        case 'J': return 'Валет';
        case 'Q': return 'Дама';
        case 'K': return 'Король';
        case 'A': return 'Туз';
    }
}

function getSuitName(suit) {
    switch (suit) {
        case 'H': return 'Черви';
        case 'D': return 'Бубны';
        case 'C': return 'Трефы';
        case 'S': return 'Пики';
    }
}

function createDeck() {
    let suits = ['H', 'D', 'C', 'S']; // Hearts, Diamonds, Clubs, Spades
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // Numeric cards 2-10, then Jack, Queen, King, Ace
    let deck = [];
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({rank: rank, suit: suit});
        }
    }
    return deck;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function drawCard() {
    return deck.pop();
}

function hit() {
    playerHand.push(drawCard());
    renderHands();
    output.innerHTML = "Карты игрока: " + cardToString(playerHand) + "<br/>Карты дилера: " + getRankName(dealerHand[0].rank) + " " + getSuitName(dealerHand[0].suit) + ", ?";
    if (getHandValue(playerHand) > 21) {
        output.innerHTML += "<br/>Игрок проиграл! Дилер побеждает.";
    }
}

function stand() {
    while (getHandValue(dealerHand) < 17) {
        dealerHand.push(drawCard());
    }
    renderHands();
    output.innerHTML += "<br/>Карты игрока: " + cardToString(playerHand) + "<br/>Карты дилера: " + cardToString(dealerHand);
    if (getHandValue(dealerHand) > 21 || getHandValue(playerHand) > getHandValue(dealerHand)) {
        output.innerHTML += "<br/>Дилер проиграл! Игрок побеждает.";
    } else if (getHandValue(playerHand) < getHandValue(dealerHand)) {
        output.innerHTML += "<br/>Дилер побеждает.";
    } else {
        output.innerHTML += "<br/>Ничья!";
    }
    // Открываем карты дилера после завершения игры
    renderDealerOpen();
}

function renderDealerOpen() {
    dealerHandDiv.innerHTML = '';
    for (let card of dealerHand) {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.backgroundImage = `url('./images/${card.rank}${card.suit}.png')`;
        dealerHandDiv.appendChild(cardDiv);
    }
}


function getHandValue(hand) {
    let value = 0;
    let aceCount = 0;
    for (let card of hand) {
        let rank = card.rank;
        if (rank === 'J' || rank === 'Q' || rank === 'K') {
            value += 10;
        } else if (rank === 'A') {
            aceCount++;
            value += 11;
        } else {
            value += parseInt(rank);
        }
    }
    while (value > 21 && aceCount > 0) {
        value -= 10;
        aceCount--;
    }
    return value;
}

function renderHands() {
    playerHandDiv.innerHTML = '';
    dealerHandDiv.innerHTML = '';

    // Отображаем карты игрока
    for (let card of playerHand) {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.backgroundImage = `url('./images/${card.rank}${card.suit}.png')`;
        playerHandDiv.appendChild(cardDiv);
    }

    // Отображаем карты дилера
    for (let i = 0; i < dealerHand.length; i++) {
        let card = dealerHand[i];
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        if (i === 0) {
            // Отображаем закрытую карту в начале
            cardDiv.style.backgroundImage = `url('./images/${card.rank}${card.suit}.png')`;
            
        } else {
            // Отображаем открытую карту после закрытой
            cardDiv.style.backgroundImage = `url('./images/back_of_card.png')`;
        }
        dealerHandDiv.appendChild(cardDiv);
    }
}



