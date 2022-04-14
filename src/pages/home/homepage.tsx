import { Grid, Typography } from "@mui/material";
import React from "react";
import { InfoModal } from "../../Components/InfoModal";
import { PlayerCounter } from "../../Components/Playercounter";

export const HomePage = () => {

    const open = (localStorage.getItem('tutorial') === 'true')

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
          <InfoModal nextPage="question" open={open}>
            <Typography>
              SCAMP-IT works particularly well in a team where people can
              complement each other’s ideas and concepts! Consequently, you must
              first state how many people are participating.
            </Typography>
          </InfoModal>
          <Grid item xs={12}>
            <Typography variant="h1" textAlign={"center"} mb={5}>
              Scamp-IT!
            </Typography>
          </Grid>
          <Grid item xs>
            <PlayerCounter />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </React.Fragment>
    );
}
