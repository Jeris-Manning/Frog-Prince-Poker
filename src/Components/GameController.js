// import React, { useState } from "react";
// import PlayerHand from "./PlayerHand";
// import { freshDeck, emptyHand } from "../Utility/deckUtilities";
// import HandEvaluation from "./HandEvaluation";

// const GameController = ({ state, dispatch }) => {
  // const [deck, setDeck] = useState([]);
  // const [hand, setHand] = useState(emptyHand());
  // const [phase, setPhase] = useState(1);

  // let currHand = [];
  // let currDeck = [];

  // function dealCards() {
  //   let newDeck = freshDeck();
  //   console.log(newDeck, "N E W DECK");
  //   let newHand = emptyHand();
  //   for (let i = 0; i < 5; i++) {
  //     newHand[i] = { ...newDeck.pop(), held: false };
  //   }
  //   setDeck(...newDeck);
  //   setHand(...newHand);
  //   setPhase(2);
  // }

  // function drawCards(cardIndices) {
  //   currDeck = [...deck];
  //   currHand = [...hand];

  //   for (let i = 0; i < cardIndices.length; i++) {
  //     currHand[cardIndices[i]] = { ...currDeck.pop(), held: false };
  //   }

  //   HandEvaluation(currHand); // Do end of hand sorting of what not
  //   setPhase(1);
  //   setHand([...currHand]);
  //   setDeck([...currDeck]);
  // }

//   return (
//     <div>
//       <PlayerHand
//         dealCards={dealCards}
//         drawCards={drawCards}
//         hand={hand}
//         setHand={setHand}
//         phase={phase}
//         setPhase={setPhase}
//       />
//     </div>
//   );
// };

// export default GameController;
