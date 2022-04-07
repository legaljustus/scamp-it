import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PrototypingTimer } from "./prototypingTimer";


export const TimerPage = () => {
    let navigate = useNavigate();
    const userQuestions = JSON.parse(localStorage.getItem("userQuestions")!);  

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
              Prototype!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <PrototypingTimer />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary"
              onClick={()=> navigate("/pitch")}
            >
              Ready to pitch?
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography>Player questions:</Typography>
            <Typography>
              <ol>
                {userQuestions.map((txt: string) => (
                  <li>{txt}</li>
                ))}
              </ol>
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
} 