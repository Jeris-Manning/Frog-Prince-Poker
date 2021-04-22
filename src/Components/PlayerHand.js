import React from "react";
import styled from "styled-components";

import { cards } from "../Utility/Cards";

const PlayerHand = ({ state, drawCards, hand, setHand, phase, setPhase }) => {
  function holdCard(slot) {
    let tempHand = [...hand];
    tempHand[slot]["held"] = !tempHand[slot]?.held;
    setHand([...tempHand]);
  }

  function handleDraw() {
    let drawArray = [];
    for (let i = 0; i < 5; i++) {
      if (hand[i].held === false) {
        drawArray.push(i);
      }
    }
    drawCards(drawArray);
  }

  const cardPix = () => {
    const picBox = [];
    for (let i = 0; i < 5; i++) {
      picBox.push(
        <CardDiv>
          <div className={hand[i].held === true ? "heldMark" : "scram"}>
            HELD
          </div>
          <img
            src={hand[i].idx === "blank" ? cards["back"] : cards[hand[i]?.idx]}
            alt="playing card"
          />
          <button
            className={phase === "newGame" ? "scram" : ""}
            onClick={() => {
              holdCard(i);
            }}>
            {hand[i]?.held ? "Discard" : "Hold"}
          </button>
        </CardDiv>
      );
    }
    return picBox;
  };

  return (
    <DisplayDiv>
      <PokerHandDiv>{cardPix()}</PokerHandDiv>
      <button onClick={() => handleDraw()}>DRAW</button>
    </DisplayDiv>
  );
};

export default PlayerHand;

const DisplayDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 150px;
    margin-top: 30px;
  }
`;

const PokerHandDiv = styled.div`
  width: 80vw;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
`;

const CardDiv = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 200px;
  }
  button {
    margin: 0 auto;
  }
  .heldMark {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
    font-weight: 700;
    background-color: rgba(0, 140, 0, 0.9);
    top: 260px;
    width: 120px;
    height: 40px;
    border: solid 1px black;
  }
`;
