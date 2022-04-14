import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SCAMPER } from "../../variables";
import { PrototypingTimer } from "../Timer/prototypingTimer";


export const PitchPage = () => {
    let navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const tutorialOpen = localStorage.getItem("tutorial") === "true";
    const Players = parseInt(localStorage.getItem("users")!);

    const HandleDone = () => {
      localStorage.clear();
      navigate("/home");
    }

    const DoneModal = () => {

        return (
          <Modal open={open}>
            <Paper
              sx={{
                mx: "auto",
                mt: "30vh",
                maxWidth: "80%",
                p: 2,
                borderRadius: 5,
              }}
            >
              <Typography variant="h4" fontWeight={"bold"} textAlign="center" mb={2}>
                SCAMPER complete!
              </Typography>
              <Typography>
                To improve your idea discuss your ideas with each other.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: "100%",
                  borderRadius: 10,
                  fontSize: 22,
                  mt: 5,
                }}
                onClick={() => HandleDone()}
              >
                Play again!
              </Button>
            </Paper>
          </Modal>
        );
    }

    const currentLetter = localStorage.getItem("letter")!;

    const handleNextQuestions = () => {
        let qIndex = SCAMPER.indexOf(currentLetter.replaceAll('"', ""));
        if(qIndex < 6){
        localStorage.setItem("letter", JSON.stringify(SCAMPER[qIndex + 1].toString()));
        navigate("/question");
        }
        if(qIndex === 6){
            setOpen(true);
        }
    };

    const handleEndTutorial = () => {
      localStorage.clear();
      localStorage.setItem("tutorial", JSON.stringify(false));
      navigate('/home')
    }

    return (
      <React.Fragment>
        <Modal
          open={tutorialOpen}
          sx={{
            alignItems: "flex-end",
            display: "flex",
          }}
        >
          <Paper
            sx={{
              mx: "auto",
              maxWidth: "100%",
              width: "100%",
              p: 2,
              borderRadius: 3,
            }}
          >
            <Box p={2}>
              <Typography>
                Each participant will now get 30 seconds to pitch and discuss
                their idea with the other participants.
              </Typography>
              <br />
              <Typography>
                It is encouraged to ask questions and start the conversation to
                get the creative juices flowing!
              </Typography>
              <br />
              <Typography>
                After this all of the steps will be repeated throughout the
                other 6 heuristics. At the end you will have a substantial
                collection of possible ideas or improvements to your current
                idea. Now let's try it yourselves!
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: "100%",
                borderRadius: 10,
                fontSize: 22,
                mt: 5,
              }}
              onClick={() => handleEndTutorial()}
            >
              Let's go!
            </Button>
          </Paper>
        </Modal>
        <DoneModal />
        <Grid
          container
          height={"100vh"}
          sx={{
            backgroundColor: "primary.main",
            padding: 2,
            pt: 5,
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h1" textAlign="center">
              Discuss!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <PrototypingTimer time={30 * Players} />
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
                fontSize: 34,
                borderRadius: 15,
                p: 3,
                px: 10,
              }}
              onClick={() => handleNextQuestions()}
            >
              Next!
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}