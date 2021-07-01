import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        font-family: Rubik, monospace;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
