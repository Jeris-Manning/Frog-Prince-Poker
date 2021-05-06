import React from "react";
import styled from "styled-components";
import Card from "./Card";
import HoldButton from "./HoldButton";

const HandDisplay = ({ state, dispatch }) => {
  return (
    <PokerHandDiv>
      {state.hand.map((card, id) => {
        return (
          <div key={id}>
            <Card card={card} id={id} state={state} />
            <HoldButton state={state} dispatch={dispatch} id={id} />
          </div>
        );
      })}
    </PokerHandDiv>
  );
};

export default HandDisplay;

const PokerHandDiv = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  div {
    margin: 0 5px;
    button {
      min-width: 75px;
      width: 50%;
      margin-top: 15px;
    }
  }
`;
