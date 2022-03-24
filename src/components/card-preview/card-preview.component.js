import React from "react";

import Card from "../card/card.component";
import { Container } from "./card-preview.styles";

import { DATA } from "../../data/data";

const CardPreview = () => {
  return (
    <Container>
      {DATA.map((item) => (
        <Card item={item}/>
      ))}
    </Container>
  );
};

export default CardPreview;
