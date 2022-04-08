import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SCAMPER } from "../variables";

export const PlayerCounter = () => {

    const [userCount, setUserCount] = useState<number>(1);
    let navigate = useNavigate();

    const startGame = (users: number) => {
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("letter", JSON.stringify(SCAMPER[0]));
        navigate("/question");
    }

    const minusUser = () => {
      if(userCount > 1){
        setUserCount(userCount - 1);
      }
    }

    return (
      <Grid container>
        <Grid item xs={12} display={"flex"} justifyContent={"center"} mb={5} mt={-3}>
          <img src="/Tekengebied 1logo .png" width="175px" alt="scamp-it logo"></img>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" textAlign="center" mb={2}>
            How many people are participating?
          </Typography>
          <Paper
            elevation={1}
            sx={{
              py: 4,
              textAlign: "center",
              width: "80%",
              mx: "auto",
              borderRadius: 10,
            }}
          >
            <Typography variant="h1">{userCount}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid container my={4}>
            <Grid item xs={6} display={"flex"} justifyContent={"center"}>
              <IconButton onClick={() => minusUser()}>
                <RemoveCircleIcon
                  sx={{
                    fontSize: 120,
                    color: "secondary.main",
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"center"}>
              <IconButton onClick={() => setUserCount(userCount + 1)}>
                <AddCircleIcon
                  sx={{
                    fontSize: 120,
                    color: "secondary.main",
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} justifyContent={"center"} display={"flex"} pt={2}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: "80%",
              fontSize: 44,
              borderRadius: 20,
            }}
            onClick={() => startGame(userCount)}
          >
            Start
          </Button>
        </Grid>
      </Grid>
    );
}