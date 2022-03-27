import { Grid, Typography } from "@mui/material";
import React from "react";

export const HomePage = () => {

    return (
      <React.Fragment>
        <Grid container height={"100vh"}
            sx={{
                backgroundColor: 'primary.main',
                padding: 2
            }}
        >
            <Grid item xs>
                <Typography variant="h1" textAlign={"center"} mb={5}>
                    Scamp-IT!
                </Typography>
            </Grid>
        </Grid>
      </React.Fragment>
    );
}
