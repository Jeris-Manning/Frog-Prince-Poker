import React from "react";
import styled from "styled-components";
import CoinSelector from "./CoinSelector";
import CreditDisplay from "./CreditDisplay";
import CashSlot from "./CashSlot";
import BetSize from "./BetSize";

const CreditControls = ({ state, dispatch }) => {
  return (
    <CreditControlDiv>
      <CoinSelector state={state} dispatch={dispatch} />
      <BetSize state={state} dispatch={dispatch} />
      <CreditDisplay state={state} dispatch={dispatch} />
      <CashSlot state={state} dispatch={dispatch} />
    </CreditControlDiv>
  );
};

export default CreditControls;

const CreditControlDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 60%;
`;
