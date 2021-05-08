import React from "react";
import styled from "styled-components";

const DealButton = ({ state, dispatch }) => {
  let phase = state.phase;
  let newPhase = phase > 0 ? Number(3 - Number(phase)) : 1;
  return (
    <DealDrawButton
      onClick={() => dispatch({ type: "PHASE_CHANGE", payload: newPhase })}>
      {phase === 1 ? "Draw" : "Deal"}
    </DealDrawButton>
  );
};

export default DealButton;

const DealDrawButton = styled.button`
  margin-top: 50px;
  width: 150px;
`;
