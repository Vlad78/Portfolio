import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  color: ${theme.colors.font}
}

body {
    font-family: "Manrope", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: normal;
}

p {
    margin: 0 0 10px 0;
}

a {
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: underline;
    }
}

ul {
    list-style: none;
}

button {
    background-color: none;
    border: none;
}

img {
    max-width: 100%;
    height: auto;
}

section:nth-of-type() {}

`;
