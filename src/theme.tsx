import { createTheme, ThemeOptions } from "@mui/material/styles";

interface CustomThemeOptions extends ThemeOptions {}

const theme: CustomThemeOptions = {
  palette: {
    primary: {
      main: "#dffdff",
    },
    secondary: {
      main: "#377771",
    },
    background: {
      default: "#5c95ff",
      paper: "#FFFFFF",
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
        '"Montserrat Alternates"'
      ].join(','),
      h1:{
          fontSize: 64,
          color: "#377771",
          fontStyle:"italic"
      }
  }
};

export default createTheme(theme);