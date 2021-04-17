export const freshDeck = () => {
  const deck = new Array(52);
  const suits = ["c", "d", "h", "s"];

  let rank = 2;
  let suit = 0;

  for (let i = 0; i < 52; i++) {
    deck[i] = [rank, suits[suit]];
    if (rank === 14) {
      rank = 1;
      suit++;
    }
    rank++;
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

export const rankKey = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: "Jack",
  12: "Queen",
  13: "King",
  14: "Ace",
};

export const suitKey = {
  c: "Clubs",
  d: "Diamonds",
  h: "Hearts",
  s: "Spades",
};
