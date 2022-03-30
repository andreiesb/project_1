import React from "react";
import { Container } from "./App.styles";
import Home from "./pages/home/home-page";

import GlobalStyle from "./GlobalStyles";
import { Provider } from "./context/context";
import { DATA } from "./data/data";
import { Context } from "./context/context";

const App: React.FC = () => {
  return (
    <Provider value={{ card: DATA[0], toggleCard: ()  => {}}}>
      <Container>
        <GlobalStyle />
        <Home />
      </Container>
    </Provider>
  );
};

export default App;
