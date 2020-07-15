console.log("working");
let player1score = 26;
let player2score = 26;

//build deck of cards (class for card, class for deck)
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
  }
}

class Deck {
    constructor() {
        this.cards = [];
        this.suits = ["hearts", "spades", "diamonds", "clubs"];
        this.values = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        this.player1pile = [];
        this.player2pile = [];
        this.tempPile = [];
        this.player1card = null;
        this.player2card = null;
        document.querySelector(".button").addEventListener("click", () => {
            this.flipCards();
        });
    }

    //iterates through available suits and values to create deck of 52 cards
    buildDeck() {
        for(let i = 0; i < this.suits.length; i++) {
            for(let j = 0; j <this.values.length; j++) {
                this.cards.push(new Card(this.suits[i], this.values[j]));
            }
        }
    }

    //shuffles the cards so they are in random order after creation
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

    //takes deck of cards and distributes equally between player 1 and player 2 (26 each) 
    dealCards () {
        for(let i = 0; i < this.cards.length / 2; i++){
                this.player1pile.push(this.cards[i]);
                this.player2pile.push(this.cards[this.cards.length - i - 1]);
            }
            console.log(this.player1pile);
            console.log(this.player2pile);
        } 

    //identifies random card from each player's pile and displays played card for "battle"
    flipCards () {
    let randomPlayer1index = Math.floor(Math.random()*this.player1pile.length-1)
    this.player1card = this.player1pile[randomPlayer1index];
    this.player1pile.splice(randomPlayer1index, 1);
    document.getElementById("player1card").innerHTML = `${this.player1card.value} <br>of<br> ${this.player1card.suit}`;
    let randomPlayer2index = Math.floor(Math.random()*this.player2pile.length-1)
    this.player2card = this.player2pile[randomPlayer2index];
    this.player2pile.splice(randomPlayer2index, 1);
    document.getElementById("player2card").innerHTML = `${this.player2card.value} <br> of <br> ${this.player2card.suit}`;
       console.log(this.player1card);
       console.log(this.player2card);
            
            //compares card values to determine winner of hand and adds played cards to bottom (end of array) of winner pile
            //if tie, will kicks off "war" action
            if (this.player1card.value > this.player2card.value) {
                this.player1pile.push(this.player1card); 
                this.player1pile.push(this.player2card); 
                player1score++;
                player2score--;
                document.getElementById("flipcards").innerHTML = "<b>FLIP CARDS</b>";
                document.getElementById("status").innerHTML = "PLAYER 1 WINS THIS BATTLE";
                document.getElementById("1score").innerHTML = `${player1score}`;
                document.getElementById("2score").innerHTML = `${player2score}`;
                this.winnerYet();
            } else if (this.player2card.value > this.player1card.value) {
                this.player2pile.push(this.player1card);
                this.player2pile.push(this.player2card);
                player1score--;
                player2score++;
                document.getElementById("flipcards").innerHTML = "<b>FLIP CARDS</b>";
                document.getElementById("status").innerHTML = "PLAYER 2 WINS THIS BATTLE";
                document.getElementById("2score").innerHTML = `${player2score}`;
                document.getElementById("1score").innerHTML = `${player1score}`;
                this.winnerYet();
            } else (this.player1card.value === this.player2card.value); {
                this.player1pile.push(this.player1card);
                this.player2pile.push(this.player2card);
                //document.getElementById("status").innerHTML = "uh-oh, this battle is a draw.<br><br>  We are heading to WAR!";
                this.winnerYet();
                }         
    }
       
//Checks player card pile count.  When a player card count reaches 52, uses alert to declare a winner.
    winnerYet () { 
        if (this.player1score > 51) {
            alert("Player 1 is the WINNER!")
        } else if (this.player2score > 51) {
            alert("Player 2 is the WINNER!");
            }    
        } 
    }

let deckOfCards = new Deck();
deckOfCards.buildDeck();
deckOfCards.shuffle();
deckOfCards.dealCards();

//Reference: how to build a deck of cards in JS --> https://www.youtube.com/watch?v=h3ehO5QMNu4 and Thiago Cavalcante ;-)
