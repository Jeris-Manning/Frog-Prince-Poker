import React, { useEffect, useState } from "react";
import HandDisplay from "./HandDisplay";
import HandEvaluation from "./HandEvaluation";

const AfterDraw = ({ state, dispatch }) => {
  const [finalHand, setFinalHand] = useState("");
  let currentDeck = [...state.deck];
  let currentHand = [...state.hand];

  let indices = [];
  let popper = {};
  for (let i = 0; i < 5; i++) {
    if (state.hand[i].held === false) {
      indices.push(i);
    }
  }

  for (let k = currentDeck.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * k);
    const tempCard = currentDeck[k];
    currentDeck[k] = currentDeck[j];
    currentDeck[j] = tempCard;
  }

  for (let i = 0; i < indices.length; i++) {
    popper = currentDeck.pop();
    currentHand[indices[i]] = { ...popper, held: false, showBack: true };
  }

  useEffect(() => {
    if (state.phase === "afterDraw") {
      console.log(currentHand, "CURRENTHand");
      dispatch({
        type: "DRAW_HAND",
        payload: { hand: currentHand, deck: currentDeck },
      });

      for (let i = 0; i < indices.length; i++) {
        setTimeout(() => {
          let currentCard = currentHand[indices[i]];
          dispatch({
            type: "SHOW_DRAWN_CARD",
            payload: { currentCard: currentCard, cardIdx: indices[i] },
          });
        }, i * 70 + 100);
      }

      let processedHand = HandEvaluation(currentHand);
      let credits = processedHand[1] * state.wager * state.coin.multiplier;
      setFinalHand("You have " + processedHand[0]);

      dispatch({ type: "ADD_CREDIT", credits });
    }
  }, [state.phase]);

  return (
    <HandDisplay
      afterDeal={false}
      state={state}
      dispatch={dispatch}
      finalHand={finalHand}
    />
  );
};

export default AfterDraw;
