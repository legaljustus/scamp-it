import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { InfoModal } from "../../Components/InfoModal";
import { SCAMPER } from "../../variables";


export const WelcomePage = () => {
        let navigate = useNavigate();
        const [open, setOpen] = React.useState(false);
        const handleTutorial = () => {
            localStorage.setItem("tutorial", JSON.stringify(true));
            localStorage.setItem("users", JSON.stringify(1));
            localStorage.setItem("letter", JSON.stringify(SCAMPER[0]));
            localStorage.setItem(
              "userQuestions",
              JSON.stringify(["What other types of ingredients or materials can be substituted?",
    "What other people, places, or things can be substituted?",
    "What other methods, processes, or procedures can be substituted?"])
            );
            setOpen(true);
        }
        const handleNo = () => {
            localStorage.setItem("tutorial", JSON.stringify(false));
            navigate("/home")
        }
    
    return (
      <React.Fragment>
        <InfoModal open={open} nextPage="home">
            <Typography>
              SCAMP-IT is a creativity method that can help with creating ideas
              through the application of seven heuristics: Substitute, Combine,
              Adapt, Modify, Put to another use, Eliminate and Reverse
              (SCAMPER).
            </Typography>
            <br/>
            <Typography>
              Each of these heuristics stimulates you to approach an existing
              idea from a different angle which might result in new and
              promising ideas.
            </Typography>
        </InfoModal>
        <Grid
          container
          height={"100vh"}
          sx={{
            backgroundColor: "primary.main",
            padding: 2,
            pt: 5,
          }}
        >
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            mb={5}
            mt={-3}
          >
            <img
              src="/Tekengebied 1logo .png"
              width="175px"
              height="170px"
              alt="scamp-it logo"
            ></img>
          </Grid>
          <Grid item>
            <Typography
              textAlign="center"
              variant="h4"
              fontSize={37}
              color="secondary.main"
              fontWeight="bold"
            >
              Is this the first time you're using SCAMP-IT?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                <IconButton onClick={() => handleNo()}>
                  <CancelIcon
                    sx={{
                      fontSize: 120,
                      color: "error.main",
                    }}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                <IconButton onClick={() => handleTutorial()}>
                  <CheckCircleIcon
                    sx={{
                      fontSize: 120,
                      color: "secondary.main",
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}