import React from "react";
import styled from "styled-components";
import { Cards } from "../../Assets/Cards";

const Card = ({ card }) => {
  return (
    <CardSlot>
      <img
        className={card.showBack ? "scram" : ""}
        src={Cards[card?.idx]}
        alt="playing card"
        key={card?.idx}
      />
    </CardSlot>
  );
};

export default Card;

const CardSlot = styled.div`
  width: 206px;
  height: 288px;
  background-image: url(${Cards["back"]});
  img {
    width: 100%;
    max-width: 206px;
  }
`;
