import React from "react";
import styled from "styled-components";
import { Cards } from "../Assets/Cards";

const Card = ({ state, card, id }) => {
  return (
    <CardDiv>
      <div className={state.held[id] === true ? "heldMark" : "scram"}>HELD</div>

      <img
        src={card?.idx === "blank" ? Cards["back"] : Cards[card?.idx]}
        alt="playing card"
        key={card?.idx}
      />
    </CardDiv>
  );
};

export default Card;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    width: 100%;
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
    width: 120px;
    height: 40px;
    border: solid 1px black;
    @media (max-width: 900px) {
      font-size: 1.15rem;
      font-weight: 700;
      width: 60px;
      height: 25px;
      background-color: rgb(0, 140, 0);
    }
  }
`;
