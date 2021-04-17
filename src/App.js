import React, { useReducer } from "react";
import reducer, { init } from "./Utility/reducer";
import PlayerHand from "./Components/PlayerHand";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, init);

  return (
    <>
      <h1>Poker Game</h1>
      <PlayerHand state={state} dispatch={dispatch} />
    </>
  );
}

export default App;
