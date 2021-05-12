import React from "react";
import styled from "styled-components";
import Card from "./Card";

const HandDisplay = ({ state, dispatch, afterDeal, finalHand }) => {
  return afterDeal === true ? (
    <PokerHandDiv>
      {state.hand.map((card, id) => {
        return (
          <CardDiv
            key={id}
            onClick={() => {
              console.log("I GOT CLICK");
              let holdState = state.hand[id].held;
              holdState = !holdState;
              dispatch({
                type: "TOGGLE_HOLD",
                payload: { holdState: holdState, id: id },
              });
            }}>
            <Card card={card} id={id} state={state} />
            <HeldDisplay>
              <Held
                className={card.held && state.phase !== "begin" ? "" : "scram"}>
                HELD
              </Held>
            </HeldDisplay>
          </CardDiv>
        );
      })}
    </PokerHandDiv>
  ) : (
    <HandDisplayDiv>
      <PokerHandDiv>
        {state.hand.map((card, id) => {
          return (
            <CardDiv key={id}>
              <Card card={card} id={id} state={state} />
            </CardDiv>
          );
        })}
      </PokerHandDiv>
      <AnnounceHandHeader>{finalHand}</AnnounceHandHeader>
    </HandDisplayDiv>
  );
};

export default HandDisplay;

const HandDisplayDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const PokerHandDiv = styled.div`

  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 550px) {
    width: 95%;
  }
}
`;

const AnnounceHandHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const CardDiv = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 550px) {
    margin: 0 1px;
  }
`;

const HeldDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const Held = styled.div`
  color: green;
  font-weight: 700;
  font-size: 2.1rem;
  margin: 0;
  padding: 0;
`;
