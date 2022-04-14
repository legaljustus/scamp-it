import { Box, Button, Modal, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    nextPage: string,
    open: boolean
}

export const InfoModal : React.FC<Props> = ({
    nextPage,
    open,
    children
}) => {
       
    let navigate = useNavigate();



    return (
      <React.Fragment>
        <Modal
          open={open}
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
            <Box p={2}>{children}</Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: "100%",
                borderRadius: 10,
                fontSize: 22,
                mt: 5,
              }}
              onClick={() => navigate(`/${nextPage}`)}
            >
              next
            </Button>
          </Paper>
        </Modal>
      </React.Fragment>
    );
}