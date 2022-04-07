import { Button, Grid, Modal, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SCAMPER } from "../../variables";
import { PrototypingTimer } from "../Timer/prototypingTimer";


export const PitchPage = () => {
    let navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const DoneModal = () => {

        return (
          <Modal open={open}>
            <Paper
              sx={{
                mx: "auto",
                mt: "40vh",
                maxWidth: "80%",
                p: 2,
              }}
            >
              <Typography variant="h4" fontWeight={"bold"} textAlign="center">
                Klaar!
              </Typography>
              <Button variant="contained" color="secondary"
                onClick={()=> navigate('/')}
              >
                Opnieuw spelen
              </Button>
            </Paper>
          </Modal>
        );
    }

    const currentLetter = localStorage.getItem("letter")!;

    const handleNextQuestions = () => {
        let qIndex = SCAMPER.indexOf(currentLetter.replaceAll('"', ""));
        console.log(qIndex)
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
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleNextQuestions()}
            >
              Next!
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}