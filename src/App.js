import React from "react";
import { Container } from "./App.styles";
import Home from "./components/home/home.component";

import GlobalStyle from "./GlobalStyles";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Home />
    </Container>
  );
};

export default App;
