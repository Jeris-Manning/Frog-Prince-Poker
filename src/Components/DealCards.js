import React, { useEffect } from "react";
import HandDisplay from "./HandDisplay";

const DealCards = ({ state, dispatch}) => {
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

  let mixedDeck = shuffleDeck(freshDeck());
  let postDeal = dealHand(mixedDeck);

  let afterDeal = { hand: postDeal[0], deck: postDeal[1] };

  useEffect(() => {
    if (state.phase === 1) {
      dispatch({ type: "DEAL_HAND", afterDeal });
    }
  }, [state.phase]);

  return (
    <>
      <HandDisplay
        state={state}
        dispatch={dispatch}

      />
    </>
  );
};

export default DealCards;
