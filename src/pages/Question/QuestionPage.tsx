import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid, IconButton, LinearProgress, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InfoModal } from "../../Components/InfoModal";
import { questions } from "../../variables";

export const QuestionPage = () => {
    let navigate = useNavigate();
    const open = localStorage.getItem("tutorial") === "true";

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
           setTimeLeft(20);
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

    const [timeLeft, setTimeLeft] = useState(20);
    const [question, setQuestion] = useState<string>(randomQuestion());
    const [userQuestions, setUserQuestions] = useState<Array<string>>([])


    const Timer = () => {
      // initialize timeLeft with the seconds prop


      useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) return;

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      });

      return (
        <React.Fragment>
          <Typography variant="h3" textAlign="center">{timeLeft}</Typography>
          <LinearProgress color="secondary" variant="determinate" value={timeLeft * 5}
            sx={{
              height: 20,
              borderRadius: 3,
              mt: 3
            }}
          />
        </React.Fragment>
      );
    };
    
  return (
    <React.Fragment>
      <InfoModal nextPage="timer" open={open}>
        <Typography>
          The seven mentioned heuristics can be a a little obscure at times.
          Some clarifying questions have been created which can aid you to
          understand a particular heuristic better, or stimulate you creatively.
        </Typography>
        <br/>
        <Typography>
          Each player will have 20 seconds to pick one question to aid their
          creative process.
        </Typography>
      </InfoModal>

      <Grid
        container
        height={"100vh"}
        sx={{
          backgroundColor: "primary.main",
          padding: 2,
          pt: 8,
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
          <Timer />
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              px: 4,
              minHeight: 150,
              display: "flex",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Typography variant="h5" sx={{ my: "auto" }}>
              {question}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid container my={4}>
            {timeLeft > 0 ? (
              <React.Fragment>
                <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                  <IconButton onClick={() => NextQuestion()}>
                    <CancelIcon
                      sx={{
                        fontSize: 100,
                        color: "secondary.main",
                      }}
                    />
                  </IconButton>
                </Grid>
                <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                  <IconButton onClick={() => HandleNext()}>
                    <CheckCircleIcon
                      sx={{
                        fontSize: 100,
                        color: "secondary.main",
                      }}
                    />
                  </IconButton>
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                  <IconButton onClick={() => HandleNext()}>
                    <CheckCircleIcon
                      sx={{
                        fontSize: 100,
                        color: "secondary.main",
                      }}
                    />
                  </IconButton>
                </Grid>
              </React.Fragment>
            )}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
