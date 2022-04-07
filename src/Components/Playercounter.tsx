import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SCAMPER } from "../variables";

export const PlayerCounter = () => {

    const [userCount, setUserCount] = useState<number>(0);
    let navigate = useNavigate();

    const startGame = (users: number) => {
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("letter", JSON.stringify(SCAMPER[0]));
        navigate("/question");
    }

    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper
            sx={{
              py: 2,
              textAlign: "center",
              width: "60%",
              mx: "auto",
            }}
          >
            <Typography variant="h1">{userCount}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid container my={4}>
            <Grid item xs={6} display={"flex"} justifyContent={"center"}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontSize: 55,
                  width: "50%",
                  borderRadius: "100%",
                  p: 1,
                }}
                onClick={() => setUserCount(userCount - 1)}
              >
                -
              </Button>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"center"}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontSize: 55,
                  width: "50%",
                  borderRadius: "100%",
                  p: 1,
                }}
                onClick={() => setUserCount(userCount + 1)}
              >
                +
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="error"
            onClick={() => startGame(userCount)}
          >
            Start
          </Button>
        </Grid>
      </Grid>
    );
}