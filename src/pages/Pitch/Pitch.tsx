import { Button, Grid, Modal, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SCAMPER } from "../../variables";
import { PrototypingTimer } from "../Timer/prototypingTimer";


export const PitchPage = () => {
    let navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

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
                onClick={() => navigate("/")}
              >
                Play agian!
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

    return (
      <React.Fragment>
        <DoneModal />
        <Grid
          container
          height={"100vh"}
          sx={{
            backgroundColor: "primary.main",
            padding: 2,
            pt: 5
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h1" textAlign="center">
              Discuss!
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