import React from "react";

import { Container, Title } from "./card.styles";
import { Context } from "../../context/context";

const Card = ({ item }) => {
  const { card, toggleCard} = React.useContext(Context);

  console.log(card);
  return (
    <Container image={item.image} onClick={() => toggleCard(item)}>
      <Title> {item.title}</Title>
    </Container>
  );
};

export default Card;
