export const freshDeck = () => {
  const deck = [];
  const suits = ["c", "d", "h", "s"];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 4; j++) {
      deck.push({
        suit: suits[j],
        rank: ranks[i],
        idx: `${suits[j]}${ranks[i]}`,
      });
    }
  }

  return deck;
};

export const shuffledDeck = () => {
  let startingDeck = freshDeck();

  for (let k = startingDeck.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * k);
    const tempCard = startingDeck[k];
    startingDeck[k] = startingDeck[j];
    startingDeck[j] = tempCard;
  }

  return startingDeck;
};
