import React, { useState } from "react";
import PlayerHand from "./PlayerHand";
import { shuffledDeck } from "../Utility/deckUtilities";

const Deck = ({ state, dispatch }) => {
  const [deck, setDeck] = useState(shuffledDeck());
  const [deckCount, setDeckCount] = useState(52);

  let newHand = {};
  let newCount;
  function drawCards(quantity) {
    newHand = { ...state.hand };
    newCount = deckCount;
    for (let i = 1; i <= quantity.length; i++) {
      newHand[quantity[i - 1]] = deck[newCount - 1];
      newCount--;
      console.log(deckCount, "DeckCount");
    }
    dispatch({ type: "UPDATE_HAND", newHand });
    setDeckCount(newCount);
  }

  return (
    <div>
      <PlayerHand
        drawCards={drawCards}
        deckCount={deckCount}
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Deck;
