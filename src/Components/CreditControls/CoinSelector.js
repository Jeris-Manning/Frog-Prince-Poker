import React from "react";
import styled from "styled-components";
const CoinSelector = ({ state, dispatch }) => {
  return (
    <ChooseCoinDiv>
      <h1>Coin:</h1>
      <CoinCircle
        onClick={() => dispatch({ type: "CHOOSE_COIN", payload: "dime" })}
        fill={state.coin.name === "dime" ? true : false}>
        10¢
      </CoinCircle>
      <CoinCircle
        onClick={() => dispatch({ type: "CHOOSE_COIN", payload: "quarter" })}
        fill={state.coin.name === "quarter" ? true : false}>
        25¢
      </CoinCircle>
      <CoinCircle
        onClick={() => dispatch({ type: "CHOOSE_COIN", payload: "dollar" })}
        fill={state.coin.name === "dollar" ? true : false}>
        $1
      </CoinCircle>
    </ChooseCoinDiv>
  );
};

export default CoinSelector;

const ChooseCoinDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 300px;
`;

const CoinCircle = styled.div`
  height: 60px;
  width: 60px;
  border: solid black 3px;
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 700;
  background-color: ${(props) => (props.fill ? "palegreen" : "red")};
  cursor: pointer;
`;
