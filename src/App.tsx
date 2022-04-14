import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/homepage";
import { PitchPage } from "./pages/Pitch/Pitch";
import { QuestionPage } from "./pages/Question/QuestionPage";
import { TimerPage } from "./pages/Timer/TimerPage";
import { WelcomePage } from "./pages/welcome/welcomePage";
import theme from "./theme";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <WelcomePage/>
            }
          />
          <Route
            path="/home"
            element={
              <HomePage/>
            }
          />
          <Route
            path="/question"
            element={
              <QuestionPage/>
            }
          />
          <Route
            path="/timer"
            element={
              <TimerPage/>
            }
          />
          <Route
            path="/pitch"
            element={
              <PitchPage/>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
