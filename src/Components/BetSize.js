import React from "react";
import styled from "styled-components";

const BetSize = ({ state, dispatch }) => {
  return (
    <CoinCountDiv>
      <div onClick={() => dispatch({ type: "BET_DOWN" })}>🞀</div>
      <h1>{state.wager}</h1>
      <div onClick={() => dispatch({ type: "BET_UP" })}>🞂</div>
    </CoinCountDiv>
  );
};

export default BetSize;

const CoinCountDiv = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    font-size: 4rem;
    font-weight: 700;
    line-height: 0;
    cursor: pointer;
  }
`;
