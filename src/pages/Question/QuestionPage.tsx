import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const QuestionPage = () => {
    let navigate = useNavigate();

    const Question = localStorage.getItem("Question")!;
    const Players = parseInt(localStorage.getItem("users")!);
    const [playerCount, setPlayerCount] = useState<number>(1);
    const NextPlayer = () =>{
        setPlayerCount(playerCount + 1);
    }
    const HandleNext = () =>{
        if(playerCount === Players){
            navigate("/timer")
        }
        else{
            NextPlayer();
        }
    }

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
            {Question.replace(/['"]+/g, "")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='h3' textAlign="center">
                Player {playerCount}
            </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
