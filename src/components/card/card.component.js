import React from "react";
import { Container, Title } from "./card.styles";

const Card = ({item: { image, title }}) => {
  return (
    <Container image={image}>
      <Title> {title}</Title>
    </Container>
  );
};

export default Card;
