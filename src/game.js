let deckReady = require('./deck.js');


function playGame(){
  let cards = buildDeck();{
    for (let i=0; i < 52; i+=2){
    } if (players[0].cards > players[1].cards){
      players[0].numberOfWins = numberOfWins += 1;
    } if (players[0].cards < players[1].cards){
      players[1].numberOfWins = numberOfWins += 1;

    } else {
        numberOfTies = numberOfTies += 1;
    }
  }

  return players[0].numberOfWins, players[1].numberOfWins, numberOfTies;

}

playGame();
