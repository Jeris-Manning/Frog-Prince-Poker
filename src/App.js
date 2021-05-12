import React, { useReducer } from "react";
import styled from "styled-components";
import Reducer, { initReducer } from "./Reducer";
import CardsDisplay from "./Components/CardsDisplay/CardsDisplay";
import DealButton from "./Components/DealButton";
import PayTable from "./Components/PayTable/PayTable";
import CreditControls from "./Components/CreditControls/CreditControls";
import GameHeader from "./Components/GameHeader/GameHeader.js";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(Reducer, initReducer);

  return (
    <AppContainer>
      <GameHeader state={state} />
      <PayTable state={state} />
      <CardsDisplay state={state} dispatch={dispatch} />
      <CreditControls state={state} dispatch={dispatch} />
      <DealButton state={state} dispatch={dispatch} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
