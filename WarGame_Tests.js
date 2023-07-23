describe('new Deck', () => {
    it('#Should contain 52 cards.', () => {
        let testDeck = new Deck();
        expect(testDeck.cards.length).to.equal(52);
    })
})
