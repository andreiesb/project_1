import React from "react";

import CardPreview from "../card-preview/card-preview.component";
import InfoPreview from "../info-preview/info-preview.component";

import { Container } from "./home.styles";

import { DATA } from "../../data/data";

const Home = () => {
  return (
    <Container image={DATA[1].image}>
      <InfoPreview
        item={{ title: DATA[1].title, paragraph: DATA[1].paragraph }}
      />
      <CardPreview />
    </Container>
  );
};

export default Home;
