console.log("working");

//Reference: how to build a deck of cards in JS --> https://www.youtube.com/watch?v=h3ehO5QMNu4
//Put title (header), reset (button), flip card (button) and placeholders for played cards and player stack of cards on page 
//using CSS

//build deck of cards (class for cards, class for deck)
//on page load, load deck of cards and split into two piles
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

const suits = ["Spades", "Hearts", "Diamonds", "Clubs"]
const value = ["Ace", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"]
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < value.length; j++) {
    console.log(`${value[j]} of ${suits[i]}`);
  }
}

class Deck {
    constructor() {
        this.cards = [];
        this.suits = ["hearts", "spades", "diamonds", "clubs"];
        this.values = ["Ace", "King", "Queen", "Jack", 10, 9, 8, 7, 6, 5, 4, 3, 2];
    }
    buildDeck() {
        for(let i = 0; i < this.suits.length; i++) {
            for(let j = 0; j <this.values.length; j++) {
                this.cards.push(new Card(this.suits[i], this.values[j]));
            }
        }
    }
    shuffle () {
        let currentSpot = this.cards.length, temporaryValue, randomSpot;
        
        while (0 != currentSpot) {
                randomSpot = Math.floor(Math.random() * currentSpot);
                currentSpot -= 1;
                temporaryValue = this.cards[currentSpot];
                this.cards[currentSpot] = this.cards[randomSpot];
                this.cards[randomSpot] = temporaryValue;
            }
        }
    }

let deckOfCards = new Deck();
deckOfCards.buildDeck();
console.log(deckOfCards.cards);
deckOfCards.shuffle();

//press deal (button) to divide cards into two piles (player1pile, player2pile)
let player1pile = [];
let player2pile = [];

//split deck into two piles
let 
while (deckOfCards.length > 0){
    push.player1pile

}

//addeventListener(click) logic to flip cards button, onclick: display random card from each player pile

//capture played values (cards or clicks) so that future clicks will only display available cards

//calculate winner for each flip: if player1cardvalue > player2cardvalue else player2cardvalue > player1cardvalue, add played cards to appropriate player pile

//when either player card count reaches 52(?), use alert to declare a winner

//enable reset to clear board --> add to reset button
function refresh() {
    window.parent.location = window.parent.location.href;
}