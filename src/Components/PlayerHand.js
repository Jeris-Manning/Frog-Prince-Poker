import React from "react";
import styled from "styled-components";

import { cards } from "../Utility/Cards";

const PlayerHand = ({ state, dispatch, drawCards, deckCount }) => {
  function handleDraw() {
    drawCards([0, 1, 2, 3, 4]);
  }

  const cardPix = () => {
    const picBox = [];
    for (let i = 0; i < 5; i++) {
      picBox.push(
        <img
          src={state.keep[i] ? cards[state.hand[i]?.idx] : cards["back"]}
          alt="playing card"
          onClick={() => {
            dispatch({ type: "TOGGLE_KEEP", i });
          }}
        />
      );
    }
    return picBox;
  };

  return (
    <>
      <button onClick={() => handleDraw()}>DRAW</button>
      <PokerHandDiv>{cardPix()}</PokerHandDiv>
      <h2>{`${deckCount} Cards Remain!`}</h2>
    </>
  );
};

export default PlayerHand;

const PokerHandDiv = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  img {
    max-width: 200px;
  }
`;
