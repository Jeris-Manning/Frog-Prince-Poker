import React from "react";
import styled from "styled-components";
import DealCards from "./DealCards";
import DrawCards from "./DrawCards";

const CardsDisplay = ({ state, dispatch }) => {
  return (
    <CardsDisplayDiv>
      {Number(state.phase) === 1 ? (
        <DealCards state={state} dispatch={dispatch} />
      ) : (
        <DrawCards state={state} dispatch={dispatch} />
      )}
    </CardsDisplayDiv>
  );
};

export default CardsDisplay;

const CardsDisplayDiv = styled.div`
  display: flex;
  justify-content: center;
`;
