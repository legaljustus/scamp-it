import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { default as React } from "react";
import { useNavigate } from "react-router-dom";
import { InfoModal } from "../../Components/InfoModal";
import { PrototypingTimer } from "./prototypingTimer";


export const TimerPage = () => {
    let navigate = useNavigate();
    const userQuestions = JSON.parse(localStorage.getItem("userQuestions")!);  
    const open = localStorage.getItem("tutorial") === "true";

    return (
      <React.Fragment>
        <InfoModal nextPage="pitch" open={open}>
          <Typography>
            Every participant will now have 30 seconds to work out their idea
            fitting the current heuristic and their chosen question.
          </Typography>
          <br />
          <Typography>
            It helps best to grab a piece of paper and create a small drawing or
            sketch to help explain your idea!
          </Typography>
        </InfoModal>
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
            <PrototypingTimer 
              time={60}
            />
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