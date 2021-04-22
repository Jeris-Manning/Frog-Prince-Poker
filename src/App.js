import React from "react";
import GameController from "./Components/GameController";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <GameHeader>Poker Game</GameHeader>
      <GameController />
    </>
  );
}

export default App;

const GameHeader = styled.h1`
  text-align: center;
`;
