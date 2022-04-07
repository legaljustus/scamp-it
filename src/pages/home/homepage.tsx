import { Grid, Typography } from "@mui/material";
import React from "react";
import { PlayerCounter } from "../../Components/Playercounter";

export const HomePage = () => {

    return (
      <React.Fragment>
        <Grid container height={"100vh"}
            sx={{
                backgroundColor: 'primary.main',
                padding: 2
            }}
        >
            <Grid item xs={12}>
                <Typography variant="h1" textAlign={"center"} mb={5}>
                    Scamp-IT!
                </Typography>
            </Grid>
            <Grid item xs>
                <PlayerCounter/>
            </Grid>
            <Grid item xs={12}>

            </Grid>
        </Grid>
      </React.Fragment>
    );
}
