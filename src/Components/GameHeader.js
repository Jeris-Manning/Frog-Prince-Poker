import React from "react";
import styled from "styled-components";

const GameHeader = ({ state }) => {
  return <GameHeaderDiv>{state.loadedGame}</GameHeaderDiv>;
};

export default GameHeader;

const GameHeaderDiv = styled.h1`
  margin-bottom: 10px;
`;
