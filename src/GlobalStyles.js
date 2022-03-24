import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{ 
        margin: 0rem;
        padding: 0rem;
        box-sizing: border-box;
    }

    body {
        font-family: 'Saira Condensed', sans-serif;
        font-weight: 200;
    }
`;

export default GlobalStyle;
