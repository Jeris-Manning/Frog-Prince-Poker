import React from "react";
import styled from "styled-components";
import { Cards } from "../Assets/Cards";

const Card = ({state, card, id }) => {

  return (
    <CardDiv>

      <div className={state.held[id] === true ? "heldMark" : "scram"}>HELD</div>
      <img
        src={card?.idx === "blank" ? Cards["back"] : Cards[card?.idx]}
        alt="playing card"
      />
    </CardDiv>
  );
};

export default Card;

const CardDiv = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
