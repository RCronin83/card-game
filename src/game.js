let deckReady = require('./deck.js');
let players = ['Ryan','Matt'];


module.exports = function playGame(players){
  let deck = deckReady();
  let numberOfWinsPlayerOne = 0;
  let numberOfWinsPlayerTwo = 0;
  let numberOfTies = 0;
  let date = new Date();
  let gameDate = date.getMonth() + '-' + date.getDay() + '-' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes();
  for (let i=0; i<52; i+=2){
    if (deck[i]>deck[i+1]){
      numberOfWinsPlayerOne++;
    } else if (deck[i] < deck[i+1]){
      numberOfWinsPlayerTwo++;
    } else {
      numberOfTies++;
    }
  }
  return {
    date: gameDate,
    players: [
      {
        name: players[0],
        numberOfWins: numberOfWinsPlayerOne,
        winRatio: numberOfWinsPlayerOne / 26
      },
      {
        name: players[1],
        numberOfWins: numberOfWinsPlayerTwo,
        winRatio: numberOfWinsPlayerTwo / 26
      }
    ],
    numberOfTies: numberOfTies
  };
};

// console.log(mattsDumbWorkaround(playersArray));
