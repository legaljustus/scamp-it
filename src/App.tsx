import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/homepage";
import theme from "./theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage/>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
