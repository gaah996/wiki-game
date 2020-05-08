import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <Main />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
