import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background: ${({ theme }) => theme.background || '#fff'};
    color: ${({ theme }) => theme.textColor || '#333'};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    line-height: 1.6;
    margin: 0;
    color: #333;
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
