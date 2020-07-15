# final-project-classic-game


We are playing the classic card game WAR.

Startng the game
The game initializes by clicking the "start the game" button which behind the scenes 1. creates a card deck 2. shuffles the card deck and 3. distributes the cards evenly to the two players -- to player1pile and player2pile.

Playing the game
To begin play, player clicks the "flip cards" button to display the top card from their pile in the "played cards" field and begin a battle.

Card values are compared and whichever player has the highest value card wins the battle and the two played cards are moved to the bottom of the winning player's pile.  

If card values are equal, the players go to WAR mode.  The played cards that were of equal value are moved to a temporary holding pile (tempPile) and each player contributes three more cards (unseen) to the temporary holding pile.  PLayers then flip a card from their pile and compare values.  Whichever player has the highest value card on this final flip wins the war and all cards in the temporary pile (including initial played cards and last played cards - 10 in total - are moved to the bottom of the winning player's pile.

Players continue to flip cards, proceeding in this fashion until a winner is declared.

Winning the game
To win the game, you must have obtained all cards in the deck.  Once a player score reaches 52, an alert pops up announcing that player as the winner.

Play again
**After winner is declared, the flip cards button updates to a Play Again button which functions as a reset to start the game again.

created using Javascript, html, and CSS
OOP - Card and Deck classes
Methods/functions within class - buildDeck, shuffle, dealCards, flipCards, war, winnerYet
Dom manipulation - battle status updates, player score updates, start game/flip cards/play again button

future upgrades planned:
1. make card images animated so there is a visual when cards are dealt and flipped
2. update played cards to show suit image
3. upgrade played cards to show actual playing card image

User Stories
	• As a user, I need to be able to flip my cards and see the card displayed.
	• As a user, I need the computer to calculate whether my card or other player card is higher.
	• As a user, I need to know how many cards I have in my pile.
	• As a user, I need to know when the game is over and who won.
	• As a user, I need to be able to restart the game.
  • As a user, I'd like to have the board look pretty so it is aesthetically pleasing.
