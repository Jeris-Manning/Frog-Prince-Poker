import React, {useReducer} from "react";
import reducer, { init } from "./Utility/reducer";
import Deck from "./Components/Deck";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, init);

  return (
    <>
      <h1>Poker Game</h1>

      <Deck state={state} dispatch={dispatch} />
    </>
  );
}

export default App;
