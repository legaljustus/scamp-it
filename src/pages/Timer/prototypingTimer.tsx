import { Box, Typography } from "@mui/material";
import CircularProgress, {
  CircularProgressProps
} from "@mui/material/CircularProgress";
import React, { FunctionComponent, useEffect, useState } from "react";


export const PrototypingTimer = () => {
    function CircularProgressWithLabel(
        props: 
            CircularProgressProps & { value: number },
        ) {
        return (
          <Box sx={{ position: "relative", display: "inline-flex", width: '100%' }}>
            <CircularProgress
                variant="determinate"
                color={"secondary"}
                value={props.value*1.66667}
                size={200}
                sx={{
                  mx:'auto'
                }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h1" component="div">
                {`${Math.round(props.value)}`}
              </Typography>
            </Box>
          </Box>
        );
    }
        
    const Timer:FunctionComponent<{seconds: number}> = ({seconds}) => {
      // initialize timeLeft with the seconds prop
      const [timeLeft, setTimeLeft] = useState(seconds);
      

      useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) return;

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      }, [timeLeft]);

      return (
          <CircularProgressWithLabel value={timeLeft}/>  
      );
    };


    return (
        <Timer seconds={60}/>
    );
}