import React from "react";

import CardPreview from "../card-preview/card-preview.component";
import InfoPreview from "../info-preview/info-preview.component";

import { Container } from "./home.styles";
import { Context } from "../../context/context";

const Home:React.FC = () => {
  const { card } = React.useContext(Context)

  return (
    <Container image={card.image}>
      <InfoPreview
        item={{ title: card.title, paragraph: card.paragraph }}
      />
      <CardPreview />
    </Container>
  );
};

export default Home;
