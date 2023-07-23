//JS Mocha/Chai Testing for War Game


const expect = chai.expect;
const assert = chai.assert;

describe('Test 1: New Deck', () => {
    it('#Should contain 52 cards.', () => {
        let testDeck = new Deck(); //creating new test deck variable
        testDeck.populate();
        expect(testDeck.cards.length).to.equal(52); //if all goes well, we should have 52 cards
    })
})

const player1 = {
    suits: "♠",
    values: 5
}

const player2 = {
    suits: "♥",
    values: 10
}

function playWar(suits1, suits2) {
    if (suits1.values > suits2.values) {
        return `${suits1.value} card wins`;
    } else if (suits2.values > suits1.values) {
        return `${suits2.values} of ${suits2.suits} card wins`;
    }
}

describe ('Test 2: Game in Session', () => {
    it('#Should return heart "♥" wins', () => {
    const winner = playWar (player1, player2);
    
    expect(winner).to.equal('10 of ♥ card wins');
})
})