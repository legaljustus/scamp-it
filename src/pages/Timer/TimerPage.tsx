import { Box, Button, Grid, Paper, Typography } from "@mui/material";
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
          <Grid
            item
            xs={12}
            justifyContent={"center"}
            display={"flex"}
            alignItems={"flex-start"}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                fontSize: 27,
                borderRadius: 15,
                p: 3,
                px: 5,
              }}
              onClick={() => navigate("/pitch")}
            >
              Ready to pitch?
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                borderRadius: 10,
              }}
            >
              <Typography textAlign="center" fontWeight="bold">
                Player questions:
              </Typography>
              <Box
                sx={{
                  overflow: "scroll",
                  maxHeight: 200,
                }}
              >
                <Typography>
                  <ol>
                    {userQuestions.map((txt: string) => (
                      <li>{txt}</li>
                    ))}
                  </ol>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
} 