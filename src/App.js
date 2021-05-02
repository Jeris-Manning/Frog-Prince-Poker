import React, { useState } from "react";
import PlayerHand from "./Components/PlayerHand";
import styled from "styled-components";
import "./App.css";

function App() {
  const [phase, setPhase] = useState(1);
  const [deck, setDeck] = useState([]);
  const [handRank, setHandRank] = useState("");
  const [hand, setHand] = useState([
    { held: false, idx: "blank" },
    { held: false, idx: "blank" },
    { held: false, idx: "blank" },
    { held: false, idx: "blank" },
    { held: false, idx: "blank" },
  ]);


  return (
    <>
      <GameHeader>Jacks or Better</GameHeader>
      <PlayerHand
        phase={phase}
        setPhase={setPhase}
        hand={hand}
        setHand={setHand}
        deck={deck}
        setDeck={setDeck}
        handRank={handRank}
        setHandRank={setHandRank}
      />
    </>
  );
}

export default App;

const GameHeader = styled.h1`
  text-align: center;
  padding: 15px 0;
`;
