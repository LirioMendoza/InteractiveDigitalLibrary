import React from "react";
import ReactDOM from "react-dom/client"
import App from "./page";

import "-/global.css"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "004d40"
    },
    secondary: {
      main: "#b500d6"
    },
  },
});


import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>

)