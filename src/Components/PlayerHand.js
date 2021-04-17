import React, { useEffect } from "react";
import {rankKey, suitKey} from '../Utility/deckUtilities';

const PlayerHand = ({ state, dispatch }) => {
  useEffect(() => {
    dispatch({ type: "SHUFFLE_DECK" });
    dispatch({ type: "DRAW_FIVE" });

    console.log(state.hand, "MY HAND");
  }, []);

  return <>

  {state.hand.map((card)=>
  <h2>{`${rankKey[card[0]]} of ${suitKey[card[1]]}`}</h2>

  )}

  </>;
};

export default PlayerHand;
