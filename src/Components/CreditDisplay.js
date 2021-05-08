import React from "react";
import { coins, toCash } from "../Utility/constants";

const CreditDisplay = ({ state, dispatch }) => {
  let cash = `Cash: ${toCash(state.credit / 100)}`;
  let credits = `Credits: ${state.credit / coins[state.coin]["multiplier"]}`;
  return (
    <h1
      onClick={() => {
        dispatch({ type: "SHOW_CASH" });
      }}>
      {state.showCash ? cash : credits}
    </h1>
  );
};

export default CreditDisplay;
