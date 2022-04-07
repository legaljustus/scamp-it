import { createTheme, ThemeOptions } from "@mui/material/styles";

interface CustomThemeOptions extends ThemeOptions {}

const theme: CustomThemeOptions = {
  palette: {
    primary: {
      main: "#5c95ff",
    },
    secondary: {
      main: "#377771",
    },
    background: {
      default: "#5c95ff",
      paper: "#dffdff",
    },
    text: {
      primary: "#1A3835",
    },
    error: {
      main: "#F8333C",
    },
    success: {
      main: "#9BC53D",
    },
  },
  typography: {
      fontFamily: [
        'Arial'
      ].join(','),
      h1:{
          fontSize: 64
      }
  }
};

export default createTheme(theme);