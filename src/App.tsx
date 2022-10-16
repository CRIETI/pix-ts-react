import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { darkTheme } from "./styles/themes/dark";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie] = useCookies(["isDark"]);

  console.log(typeof cookies.isDark);

  return (
    <ThemeProvider theme={cookies.isDark ? darkTheme : defaultTheme}>
      <BrowserRouter>
        <ToastContainer />
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
