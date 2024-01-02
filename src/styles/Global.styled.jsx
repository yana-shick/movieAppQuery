import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
}
body {
    min-height: 100vh;
    background-color: #fdf7c3;
}
`;

export default GlobalStyles;
