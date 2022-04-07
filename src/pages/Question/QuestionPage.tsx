import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../../variables";

export const QuestionPage = () => {
    let navigate = useNavigate();

       const AddUserQuestion = (newQuestion: string) => {
         userQuestions.push(newQuestion);
         setUserQuestions(userQuestions);
       };

       const NextPlayer = () => {
         setPlayerCount(playerCount + 1);
       };
       const HandleNext = () => {
         if (playerCount === Players) {
           AddUserQuestion(question);
           localStorage.setItem("userQuestions", JSON.stringify(userQuestions));
           navigate("/timer");
         } else {
           NextPlayer();
           AddUserQuestion(question);
           NextQuestion();
         }
       };

       const NextQuestion = () => {
         let question = randomQuestion();
         setQuestion(question);
       };
    
    const Players = parseInt(localStorage.getItem("users")!);
    const [playerCount, setPlayerCount] = useState<number>(1);

    const letter: string = localStorage.getItem("letter")!;
    const randomQuestion = () => {
      let options = questions[`${letter.replace(/['"]+/g, "")}`];
      let question = options[Math.floor(Math.random() * options.length)];
      return(question)
    }


    const [question, setQuestion] = useState<string>(randomQuestion());
    const [userQuestions, setUserQuestions] = useState<Array<string>>([])

    
  return (
    <React.Fragment>
      <Grid
        container
        height={"100vh"}
        sx={{
          backgroundColor: "primary.main",
          padding: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h1" textAlign="center">
            {letter}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign="center">
            Player {playerCount}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 1,
            }}
          >
            <Typography variant="h5">{question}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid container my={4}>
            <Grid item xs={6} display={"flex"} justifyContent={"center"}>
              <IconButton onClick={() => NextQuestion()}>
                <CancelIcon
                  sx={{
                    fontSize: 100,
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"center"}>
              <IconButton onClick={() => HandleNext()}>
                <CheckCircleIcon
                  sx={{
                    fontSize: 100,
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
