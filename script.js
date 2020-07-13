console.log("working");

//Reference: how to build a deck of cards in JS --> https://www.youtube.com/watch?v=h3ehO5QMNu4
//Put title (header), reset (button), flip card (button) and placeholders for played cards and player stack of cards on page 
//using CSS

//build deck of cards (class for card, class for deck)
//on page load, load deck of cards and split into two piles
class Card {
    constructor(suit, value) {
        this.value = value;
        this.suit = suit;
    }
}

const suits = ["Spades", "Hearts", "Diamonds", "Clubs"]
const value = [14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < value.length; j++) {
    //console.log(`${value[j]} of ${suits[i]}`);
  }
}

class Deck {
    constructor() {
        this.cards = [];
        this.suits = ["hearts", "spades", "diamonds", "clubs"];
        this.values = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        this.player1pile = [];
        this.player2pile = [];
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
    dealCards (){
        for(let i = 0; i < this.cards.length / 2; i++){
                this.player1pile.push(this.cards[i]);
                this.player2pile.push(this.cards[this.cards.length - i - 1]);
            }
            //console.log(this.player1pile);
            //console.log(this.player2pile);
        } 
    flipCards () {
        let player1card = this.player1pile.shift();
        let player2card = this.player2pile.shift();
       console.log(player1card);
       console.log(player2card);
            if (player1card.value > player2card.value) {
                this.player1pile.push(player1card, player2card);
                //this.player1pile.push(player2card);    
                console.log("player 1 wins");
                console.log(this.player1pile);
            } else if (player2card.value > player1card.value){
                this.player2pile.push(player1card, player2card);
                //this.player2pile.push(player2card); 
                console.log("player 2 wins");
                console.log(this.player2pile);
            } else {(player1card === player2card);
            //flip 4 cards and run compare cards function again
                console.log("tie");
            }
    }
}
   
let deckOfCards = new Deck();
deckOfCards.buildDeck();
deckOfCards.shuffle();
deckOfCards.dealCards();
deckOfCards.flipCards();

//addeventListener(click) logic to flip cards button, onclick: display card from each player pile (index 0)
//let dealButton = document.querySelector('#dealButton');


//when either player card count reaches 52(?), use alert to declare a winner
// if (this.player1pile.length === 52) {
// alert("Player 1 is the WINNER!")
// } else if (this.player2pile.length === 52) {
// alert("Player 2 is the WINNER!");
// } //else start over

//enable reset to clear board --> add to reset button
function refresh() {
    window.parent.location = window.parent.location.href;
}

//SCRATCH SECTION//

