/*The completed project should, when executed, do the following:

- Deal 26 cards to each player from a deck of 52 cards
- Iterate through the turns where each player plays a card
- The player who played the higher card is awarded a point
- Ties result in zero points for both players
- After all cards have been played, display the score and declare a winner

*/

//Defining card and type of cards
class Card {
    constructor(rank, suit, value) {
        this.rank = rank; //indicates cards as they are shown by letters and numbers
        this.suit = suit; //spades, diamonds, clubs, and hearts
        this.value = value; //numerical value (from 1 to 13)
    }
}

//Building the deck of cards
class Deck {
    constructor() {
        this.cards = []; //this will contain 52 cards once built
    }
    get card() {
        return this.cards;
    }
    buildDeck() {
        this.populate(); //functions created below
        this.shuffle();
        return this.cards;
    }

    populate() { //creating the content of the deck
        const suits = ["♠", "♣", "♥", "♦"];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let i = 0; i < suits.length; i++) { //iterating trough the different suits, ranks, and values
            for (let j = 0; i < ranks; j++) {
                this.cards.push(new Card(ranks[j], suits[i], values[j]));

            }
        }
    }

    shuffle() { //Shuffling the cards before the game starts
        if (this.cards.length > 0) {
            const shuffledDeck = this.cards.sort(() => Math.random() - 0.5)
            this.cards = [...shuffledDeck];
        }
      }
    }


//Building the player class

class Player {
    Constructor (name) {
        this.playerName = name;
        this.playerDeck = [];
        this.playerScore = 0;
    }

    get name() {
        return this.playerName;
    }

    get deck() {
        return this.playerDeck;
    }

    get score() {
        return this.playerScore;
    }

    set deck (newDeck) {
        if (Array.isArray(newDeck)) {
            this.playerDeck = newDeck;
        }
    }

    set score(newScore) {
        if (newScore =!isNaN) {
            this.playerScore = newScore;
        }
    }
}


//Building Game

class Game {
    constructor () {
        this.players = [];
        this.deck = []
    }

//Game is set. Now, let's start with a start method

start() {
    console.log('*** Game Master Menu ***');
    let input = prompt('0- exit; 1- play'); //prompts to instruct user how to start the game
    while (input != '0') {
        switch (input) {
            case '0':
                exit;
            case '1':
                this.createGame();
                break;
        }
        input = prompt('0- exit; 1- play');
    }
}

createGame () { //creating two players as instructed
    this.players[0] = new Player(
        prompt('Please enter your name. Happy to beat you!')
    );
    this.players[1] = new Player('Player 2');

    console.log(`You're about to go down, ${this.players[0].name}!`);

    const cards = new Deck ().buildDeck(); //new deck to play the game

    this.players[0].deck = [...cards.slice(0,26)]; //Assigning 26 cards to each player
    this.players[1].deck = [...cards.slice(26,52)];

    console.log('*** Dealing Hands ***');
    console.log('It is War');

    for (let i = 0; i < this.players[0].deck.length; i++) { //iterating through each player's deck of cards and adding score for who wins per round
        if (this.players[0].deck[i].value > this.players[1].deck[i].value) {
            this.players(0).score +=1;

            let winningHand = `${this.players[0].deck[i].rank} of ${this.players[0].deck[i].suit}`;
            console.log(`${this.players[0].name} won with a ${winningHand}`);
        } else {
            this.players[i].score +=1;
            let winningHand = `${this.players[1].deck[i].rank} of ${this.players[1].deck[i].suit}`;
            console.log(`Player 2 won with a ${winningHand}`);
        }
    }

//Declare a Winner

console.log('Game Over!!');
if (this.players[0].score > this.players[1].score) {
    console.log(`${this.players[0].name} won WAR with a score of ${this.players[0].score}`);
} else if (this.players[0] < this.players[1].score) {
    console.log(`${this.players[1].name} won WAR with a score of ${this.players[1].score}`)
} else {
    console.log(`${this.players[0].name} and ${this.players[1].name} tied!`);
}
}
}

const game = new Game();
game.createGame();