let deck = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];

module.exports = function buildDeck(){
  let shuffleDeck = [];
  for (let i=0;i<52;i++){
    shuffleDeck = shuffleDeck.concat(deck[Math.floor(Math.random()*deck.length)]);
  }
  return shuffleDeck;
};

// shuffleDeck.push(deck[Math.floor(Math.random()* deck.length())]);
// module.exports = function builddeck(){
//   let deck = [];
//
//   return deck;
// };
