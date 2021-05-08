import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HandDisplay from "./HandDisplay";
import HandEvaluation from "./HandEvaluation";

const DrawCards = ({ state, dispatch }) => {
  let currentDeck = [...state.deck];
  let currentHand = [...state.hand];
  const [finalHand, setFinalHand] = useState("");
  let indices = [];
  let popper = {};
  for (let i = 0; i < 5; i++) {
    if (state.held[i] === false) {
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
    currentHand[indices[i]] = { ...popper, held: false };
  }

  useEffect(() => {
    if (state.phase === 2) {
      dispatch({
        type: "DRAW_HAND",
        payload: { hand: currentHand, deck: currentDeck },
      });
      setFinalHand("You have " + HandEvaluation(currentHand));
    }
  }, [state.phase]);

  return (
    <FinalHandDiv>
      <HandDisplay buttons={false} state={state} dispatch={dispatch} />
      <FinalHand>{finalHand}</FinalHand>
    </FinalHandDiv>
  );
};

export default DrawCards;

const FinalHandDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FinalHand = styled.h1`
  text-align: center;
`;
