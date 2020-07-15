console.log("working");
let player1score = 26;
let player2score = 26;
//Reference: how to build a deck of cards in JS --> https://www.youtube.com/watch?v=h3ehO5QMNu4 and Thiago Cavalcante ;-)

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
        this.tempPile = [];
        this.player1card = null;
        this.player2card = null;
        document.querySelector(".button").addEventListener("click", () => {
            this.flipCards();
        });
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
    dealCards () {
        for(let i = 0; i < this.cards.length / 2; i++){
                this.player1pile.push(this.cards[i]);
                this.player2pile.push(this.cards[this.cards.length - i - 1]);
            }
            console.log(this.player1pile);
            console.log(this.player2pile);
        } 
    flipCards () {
    //uses "shift" to take top card (first) from player's pile as played card for "battle"
    this.player1card = this.player1pile.shift();
    document.getElementById("player1card").innerHTML = `${this.player1card.value} <br>of<br> ${this.player1card.suit}`;
    this.player2card = this.player2pile.shift();
    document.getElementById("player2card").innerHTML = `${this.player2card.value} <br> of <br> ${this.player2card.suit}`;
       console.log(this.player1card);
       console.log(this.player2card);

//feel like this should be turned into its own method?
            //compares card values to determine winner of hand and adds played cards to bottom of winner pile
            //if tie, kicks off "war" action
            if (this.player1card.value > this.player2card.value) {
                this.player1pile.push(this.player1card); 
                this.player1pile.push(this.player2card); 
                player1score++;
                player2score--;
                console.log("player1score", player1score);
                document.getElementById("flipcards").innerHTML = "<b>FLIP CARDS</b>";
                // if (this.tempPile.length > 0){
                //    // this.player1pile.push(this.tempPile);
                //     Array.prototype.push.apply(this.player1pile, this.tempPile);
                //     this.tempPile = 0;
                //     console.log(this.tempPile);
                //     player1score+=8;
                //     player2score-=6;
                //     console.log("warscoringupdate", player1score);
                //}
                document.getElementById("status").innerHTML = "PLAYER 1 WINS THIS BATTLE";
                console.log("player 1 wins");
                document.getElementById("1score").innerHTML = `${player1score}`;
                document.getElementById("2score").innerHTML = `${player2score}`;
                console.log(this.player1pile);
            } else if (this.player2card.value > this.player1card.value){
                this.player2pile.push(this.player1card);
                this.player2pile.push(this.player2card);
                player1score--;
                player2score++;
                console.log("player2score", player2score);
                document.getElementById("flipcards").innerHTML = "<b>FLIP CARDS</b>";
                // if (this.tempPile.length > 0){
                //     //this.player2pile.push(this.tempPile);
                //     Array.prototype.push.apply(this.player2pile, this.tempPile);
                //     this.tempPile = 0;
                //     console.log(this.tempPile);
                //     player2score+=8;
                //     player1score-=6;
                //     console.log("warscoringupdate", player2score);
                // }
                document.getElementById("status").innerHTML = "PLAYER 2 WINS THIS BATTLE";
                document.getElementById("flipcards").innerHTML = "<b>FLIP CARDS</b>";
                console.log("player 2 wins");
                document.getElementById("2score").innerHTML = `${player2score}`;
                document.getElementById("1score").innerHTML = `${player1score}`;
                console.log(this.player2pile);
            } else {
                this.player1pile.push(this.player1card);
                console.log(this.player1pile);
                console.log(this.player2pile);
                this.player2pile.push(this.player2card);
                //this.war();
            }
            
                this.winnerYet();
    }
    //    war () {
    //     console.log("war function")
    //     //why isn't this status update working????
    //     document.getElementById("status").innerHTML = "uh-oh.... we are at WAR!";

    //     console.log("Uh-oh... we are at War.  Next winning card gets all 8 cards in play!");
    //     console.log(this.player1pile);
    //     console.log(this.player2pile);
    //     for (let i = 0; i < 3; i++){
    //         (this.tempPile.push(this.player1pile.shift()));
    //         console.log("player1 three cards", this.tempPile, this.player1pile);
    //     }
    //     for (let j = 0; j < 3; j++){
    //         (this.tempPile.push(this.player2pile.shift()));
    //         console.log("player2 three cards", this.tempPile, this.player2pile);
    //     }
    //     console.log("tempPile",this.tempPile);

    //     this.player1card = this.player1pile.shift();
    //     this.player2card = this.player2pile.shift();
    //         if (this.player1card.value > this.player2card.value) {
    //             this.player1pile.push(this.player1card); 
    //             this.player1pile.push(this.player2card); 
    //             // player1score++;
    //             // player2score--;
    //                //if (this.tempPile.length > 0){
    //                // this.player1pile.push(this.tempPile);
    //                 Array.prototype.push.apply(this.player1pile, this.tempPile);
    //                 console.log(this.player1pile);
    //                 this.tempPile = 0;
    //                 console.log(this.tempPile);
    //                 console.log("is this tempPile empty?",this.tempPile);
    //                 player1score+=8;
    //                 player2score-=6;
    //                 console.log("warscoringupdate", player1score);}
    //                 else if (this.player2card.value > this.player1card.value){
    //                     this.player2pile.push(this.player1card);
    //                     this.player2pile.push(this.player2card);
    //                     //player1score--;
    //                     //player2score++;
    //                     //console.log("player2score", player2score);
    //                    // document.getElementById("flipcards").innerHTML = "<b>FLIP CARDS</b>";
    //                     //if (this.tempPile.length > 0){
    //                         //this.player2pile.push(this.tempPile);
    //                         Array.prototype.push.apply(this.player2pile, this.tempPile);
    //                         console.log(this.player2pile);
    //                         this.tempPile = 0;
    //                         console.log("is this tempPile empty?",this.tempPile);
    //                         player2score+=8;
    //                         player1score-=6;
    //                         console.log("warscoringupdate", player2score);
    //                     }
    //                     document.getElementById("status").innerHTML = "PLAYER 2 WINS THIS BATTLE";
    //                     document.getElementById("flipcards").innerHTML = "<b>FLIP CARDS</b>";
    //                     console.log("player 2 wins");
    //                     document.getElementById("2score").innerHTML = `${player2score}`;
    //                     document.getElementById("1score").innerHTML = `${player1score}`;
    //                     console.log(this.player2pile);
            //this.flipCards(); 
       
//WIP - when either player card count reaches 52, use alert to declare a winner
    winnerYet () { 
        if (this.player1pile.length > 51) {
            alert("Player 1 is the WINNER!")
        } else if (this.player2pile.length > 52) {
            alert("Player 2 is the WINNER!");
         } 
        //else {
        //     deckOfCards.flipCards();
        //     }    
        } 
    }


let deckOfCards = new Deck();
deckOfCards.buildDeck();
deckOfCards.shuffle();
deckOfCards.dealCards();
//deckOfCards.flipCards();
deckOfCards.winnerYet();



//SCRATCH SECTION//

//enable reset to clear board
// let reset = refresh() {
//     window.parent.location = window.parent.location.href;
// }