const DealCards = () => {
  const freshDeck = () => {
    const freshDeck = [];
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
      "11",
      "12",
      "13",
      "14",
    ];

    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 4; j++) {
        freshDeck.push({
          suit: suits[j],
          rank: ranks[i],
          idx: `${suits[j]}${ranks[i]}`,
        });
      }
    }

    return freshDeck;
  };

  const shuffleDeck = (shuffledDeck) => {
    for (let k = shuffledDeck.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * k);
      const tempCard = shuffledDeck[k];
      shuffledDeck[k] = shuffledDeck[j];
      shuffledDeck[j] = tempCard;
    }

    return shuffledDeck;
  };

  const dealHand = (readyDeck) => {
    const dealtHand = [];

    for (let i = 0; i < 5; i++) {
      let topCard = readyDeck.pop();
      dealtHand[i] = { ...topCard, held: false };
    }
    return [dealtHand, readyDeck];
  };

  let gameDeck = shuffleDeck(freshDeck());
  let gameHand = dealHand(gameDeck);

  return { dealerDeck: gameHand[1], dealerHand: gameHand[0] };
};

export default DealCards;
