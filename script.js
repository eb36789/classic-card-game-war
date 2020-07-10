console.log("working");

//Reference: how to build a deck of cards in JS --> https://www.youtube.com/watch?v=h3ehO5QMNu4
//Put title (header), reset (button), flip card (button) and placeholders for played cards and player stack of cards on page using CSS

//build deck of cards
//on page load, load deck of cards and split into two piles


class Card {
    constructor(points, suit) {
        this.value = value;
        this.suit = suit;
    }
}
// let card = new Card(2, "spades");
// console.log(card);

class Deck {
    constructor() {
        this.deck = [];
    }
    buildDeck(suits, value) {
        for(let suit of suits) {
            for(let value of value) {
                this.deck.push(new Card(suit, value));
            }
        }
        return this.deck;
    }
}

let suits = ["hearts", "spades", "diamonds", "clubs"];
let points = ["Ace", "King", "Queen", "Jack", 10, 9, 8, 7, 6, 5, 4, 3, 2];
let deckOfCards = new Deck();
let player1pile = [];
let player2pile = [];

deckOfCards.buildDeck(suits, points);
//console.log(deckOfCards);

//shuffle the cards - TAKE 1
// function shuffle () {
//     let counter =this.deck.length, temp, i;
// while(counter) {
//     i = Math.floor(Math.random() * counter--);
//     temp = this.deck[counter];
//     this.deck[counter] = this.deck[i];
//     this.deck[i] = temp;
// }
// return this.deck
// console.log(this.deck.shuffle());
// }

//shuffle the cards - TAKE 2
function shuffle () {
    let currentSpot = this.deck.length, temporaryValue, randomSpot;

    while (0 != currentSpot) {
        randomSpot = Math.floor(Math.random() * currentSpot);
        currentSpot -= 1;
        temporaryValue = this.deck[currentSpot];
        this.deck[currentSpot] = this.deck[randomSpot];
        this.deck[randomSpot] = temporaryValue;
    }
}

console.log(this.deck(shuffle))


//press deal (button) to divide cards into two piles (player1pile, player2pile)

//add click logic to flip cards button, onclick: display random card from each player pile

//capture played values (cards or clicks) so that future clicks will only display available cards

//calculate winner for each flip: if player1cardvalue > player2cardvalue else player2cardvalue > player1cardvalue, add played cards to appropriate player pile

//when either player card count reaches 52(?), use alert to declare a winner

//enable reset button to clear board

//bonus: keep running tally of wins per player