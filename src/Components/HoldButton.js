import React from "react";
import styled from "styled-components";

const HoldButton = ({ state, dispatch, id }) => {
  return (
    <HoldButtonWrap>
      <button
        className={state.phase === 1 ? "" : "scram"}
        onClick={() => {
          let holdState = [...state.held];
          holdState[id] = !holdState[id];
          dispatch({ type: "TOGGLE_HOLD", holdState });
        }}>
        {state.held[id] ? "Discard" : "Hold"}
      </button>
    </HoldButtonWrap>
  );
};

export default HoldButton;

const HoldButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  // background-color: black;
`;
