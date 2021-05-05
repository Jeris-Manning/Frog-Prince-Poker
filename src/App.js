import React, { useReducer } from "react";
import styled from "styled-components";
import Reducer, { initReducer } from "./Reducer";
import DrawCards from "./Components/DrawCards";
import DealCards from "./Components/DealCards";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(Reducer, initReducer);

  return (
    <DisplayDiv>
      <h1>Jacks or Better</h1>

      {Number(state.phase) === 1 ? (
        <DealCards state={state} dispatch={dispatch} />
      ) : (
        <div>
          <DrawCards state={state} dispatch={dispatch} />
        </div>
      )}

      {state.phase === 1 ? (
        <button
          className="dealDrawBtn"
          onClick={() => dispatch({ type: "PHASE_CHANGE", payload: 2 })}>
          Draw
        </button>
      ) : (
        <button
          className="dealDrawBtn"
          onClick={() => dispatch({ type: "PHASE_CHANGE", payload: 1 })}>
          Deal
        </button>
      )}
    </DisplayDiv>
  );
}

export default App;

const DisplayDiv = styled.div`
padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 100px;
  }
  .dealDrawBtn {
    margin-top: 50px;
    width: 150px;
  }
`;
