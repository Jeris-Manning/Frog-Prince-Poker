import React from "react";
import styled from "styled-components";
import { Cards } from "../Utility/Cards";
import HandEvaluation from "./HandEvaluation";
import HoldCard from "./HoldCard";
import DrawCards from "./DrawCards";
import DealCards from "./DealCards";

const PlayerHand = ({
  phase,
  setPhase,
  hand,
  setHand,
  deck,
  setDeck,
  handRank,
  setHandRank,
}) => {
  const handleDeal = () => {
    let dealer = DealCards();
    setHand(dealer.dealerHand);
    setDeck(dealer.dealerDeck);
    setPhase(2);
  };

  const handleDraw = (hand, deck) => {
    let afterDraw = DrawCards(hand, deck);
    setHand([...afterDraw][0]);
    setPhase(3);
    setHandRank(HandEvaluation(afterDraw[0]));
  };

  const cardPix = () => {
    const picBox = [];
    for (let i = 0; i < 5; i++) {
      picBox.push(
        <CardDiv key={i}>
          <div className={hand[i]?.held === true ? "heldMark" : "scram"}>
            HELD
          </div>
          <img
            src={hand[i]?.idx === "blank" ? Cards["back"] : Cards[hand[i]?.idx]}
            alt="playing card"
          />
          <button
            className={phase === 2 ? "" : "scram"}
            onClick={() => {
              let drawnHand = HoldCard(hand, i);
              setHand(drawnHand);
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

      {phase === 2 ? (
        <button onClick={() => handleDraw(hand, deck)}>DRAW</button>
      ) : (
        <button onClick={() => handleDeal()}>DEAL</button>
      )}
      {handRank === "" ? null : <h1>{"You have " + handRank}</h1>}
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
    margin: 30px 0;
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
