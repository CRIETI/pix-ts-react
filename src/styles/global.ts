import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :focus {
    outline: transparent;
    box-shadow: 0 0 2px var(--green-100);
  }
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor};
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
