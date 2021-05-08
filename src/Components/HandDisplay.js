import React from "react";
import styled from "styled-components";
import Card from "./Card";
import HoldButton from "./HoldButton";

const HandDisplay = ({ state, dispatch, buttons }) => {
  return (
    <PokerHandDiv>
      {state.hand.map((card, id) => {
        return (
          <CardDiv key={id}>
            <Card card={card} id={id} state={state} />
            <HoldButton
              className={buttons ? "" : "scram"}
              state={state}
              dispatch={dispatch}
              id={id}
            />
          </CardDiv>
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

  @media (max-width: 550px) {
    width: 95%;
  }
}
`;

const CardDiv = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    min-width: 75px;
    width: 50%;
    margin-top: 15px;
    font-weight: 700;
  }

  @media (max-width: 550px) {
    margin: 0 1px;
    button {
      min-width: 50px;
      width: 50px;
      height: 20px;
      margin-top: 5px;
      font-size: 0.8rem;
    }
  }
`;

// @media (max-width: 550px) {
//   width: 95%;
//   div {
//     margin: 0 1px;
//     button {
//       min-width: 50px;
//       width: 50px;
//       height: 20px;
//       margin-top: 5px;
//       font-size: 0.8rem;
