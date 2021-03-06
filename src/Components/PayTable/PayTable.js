import React from "react";
import styled from "styled-components";
import { toCash } from "../../Utility/constants";

const PayTable = ({ state }) => {
  let payArray = [];
  let pay = state.pays.entries();
  let replacer = /_/g;
  for (const pokerHand of pay) {
    pokerHand[0] = pokerHand[0].replace(replacer, " ");
    payArray.push(pokerHand);
  }
  let coinCount = state.wager;
  return (
    <PayChart>
      {payArray.map((hand, idx) => (
        <>
          <h3 className="handName">{hand[0]}</h3>
          <h3 className={coinCount === 1 ? "highlight" : ""}>
            {state.showCash
              ? toCash(hand[1] * state.coin["payConversion"])
              : hand[1]}
          </h3>
          <h3 className={coinCount === 2 ? "highlight" : ""}>
            {state.showCash
              ? toCash(hand[1] * state.coin["payConversion"] * 2)
              : hand[1] * 2}
          </h3>
          <h3 className={coinCount === 3 ? "highlight" : ""}>
            {state.showCash
              ? toCash(hand[1] * state.coin["payConversion"] * 3)
              : hand[1] * 3}
          </h3>
          <h3 className={coinCount === 4 ? "highlight" : ""}>
            {state.showCash
              ? toCash(hand[1] * state.coin["payConversion"] * 4)
              : hand[1] * 4}
          </h3>
          <h3 className={coinCount === 5 ? "highlight" : ""}>
            {state.showCash
              ? toCash(hand[1] * state.coin["payConversion"] * 5)
              : hand[1] * 5}
          </h3>
        </>
      ))}
    </PayChart>
  );
};

export default PayTable;

const PayChart = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 4fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(9, 24px);
  grid-auto-flow: row;
  gap: 0 20px;
  .highlight {
    background-color: yellow;
  }
  .handName {
    justify-self: start;
  }
  margin-bottom: 15px;
  h3 {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 3px;
  }
`;
