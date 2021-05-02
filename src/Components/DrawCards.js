const DrawCards = (hand, deck) => {
  let currentDeck = [...deck];
  let currentHand = [...hand];
  let indices = [];
  let popper = {};
  for (let i = 0; i < 5; i++) {
    if (currentHand[i]?.held === false) {
      indices.push(i);
    }
  }

  for (let i = 0; i < indices.length; i++) {
    popper = currentDeck.pop();
    currentHand[indices[i]] = { ...popper, held: false };
  }
  let drawReturn = [currentHand, true];
  return drawReturn;
};

export default DrawCards;
