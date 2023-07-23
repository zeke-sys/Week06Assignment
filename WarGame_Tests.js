describe('new Deck', () => {
    it('#Should contain 52 cards.', () => {
        let testDeck = new Deck();
        expect(testDeck.cards.length).to.equal(52);
    })
})


const player1 = {rank: 'spade', value: 10}
const player2 = {rank: 'heart', value: 5}


function war(rank1, rank2);
if (rank1.value > rank2.value) {
    return `${rank1.rank} card wins`;
} else if (rank1.rank < rank2.value) {
    return `${rank2.rank} card wins`
} else {
    return 'its a tie';
}

describe('Playing War', () => {
    it('should return spade card wins', () => {
        const winner = war(player1, player2)
        expect(winner).to.equal('heart card wins')
    }) 
})