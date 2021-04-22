export const shuffleDeck = (dirtyDeck) => {
  let deck = dirtyDeck;

  for (let k = deck.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * k);
    const tempCard = deck[k];
    deck[k] = deck[j];
    deck[j] = tempCard;
  }

  return deck;
};

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

  let freshDeck = shuffleDeck(deck);

  return freshDeck;
};
