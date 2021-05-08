import React from "react";

const HoldButton = ({ state, dispatch, id }) => {
  return (
      <button
        className={state.phase === 1 ? "" : "scram"}
        onClick={() => {
          let holdState = [...state.held];
          holdState[id] = !holdState[id];
          dispatch({ type: "TOGGLE_HOLD", holdState });
        }}>
        {state.held[id] ? "Discard" : "Hold"}
      </button>
  );
};

export default HoldButton;


