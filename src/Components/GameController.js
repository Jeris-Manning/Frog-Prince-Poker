import React, { useState } from "react";
import PlayerHand from "./PlayerHand";
import { shuffleDeck, freshDeck } from "../Utility/deckUtilities";

const GameController = () => {
  const [deck, setDeck] = useState([]);
  const [hand, setHand] = useState([
    { held: false, idx: 'blank' },
    { held: false, idx: 'blank' },
    { held: false, idx: 'blank' },
    { held: false, idx: 'blank' },
    { held: false, idx: 'blank' },
  ]);
  const [phase, setPhase] = useState('newGame');

  let newHand = {};
  let newDeck = [];

  function drawCards(cardIndices) {
    if (deck.length === 0) {
      newDeck = freshDeck();
    } else {
      newDeck = [...deck];
    }

    newHand = [...hand];

    for (let i = 0; i < cardIndices.length; i++) {
      newHand[cardIndices[i]] = { ...newDeck.pop(), held: false };
    }
    if (phase === "newGame") {
      setPhase('drawing');
    }
    setHand([...newHand]);
    setDeck([...newDeck]);
  }

  return (
    <div>
      <PlayerHand
        drawCards={drawCards}
        hand={hand}
        setHand={setHand}
        phase={phase}
        setPhase={setPhase}
      />
    </div>
  );
};

export default GameController;
