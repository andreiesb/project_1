import React from "react";

import { Container } from "./home-page.styles";
import HomeComponent from "../../components/home/home.component";

const HomePage: React.FC = () => {
  return (
    <Container>
      <HomeComponent />
    </Container>
  );
};

export default HomePage;
