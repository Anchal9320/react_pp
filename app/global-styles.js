import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Times New Roman', sans-serif;
  }

  // body.fontLoaded {
  //   font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  #app {
    background-color: #fafafa;
    min-height: 110%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Arial' sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
