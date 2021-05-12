import React from "react";
import styled from "styled-components";
import leftArrow from "../../Assets/miscImages/arrowLeft.png";
import rightArrow from "../../Assets/miscImages/arrowRight.png";

const BetSize = ({ state, dispatch }) => {
  return (
    <CoinCountDiv>
      <img
        src={leftArrow}
        alt="Arrow pointing left"
        onClick={() => dispatch({ type: "BET_DOWN" })}
      />
      <h1>{state.wager}</h1>
      <img
        src={rightArrow}
        alt="Arrow pointing right"
        onClick={() => dispatch({ type: "BET_UP" })}
      />
    </CoinCountDiv>
  );
};

export default BetSize;

const CoinCountDiv = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin: 0 10px;
  }
  img {
    width: 50px;
    cursor: pointer;
  }
`;
