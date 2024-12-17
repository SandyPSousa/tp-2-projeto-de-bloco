// import { createTheme } from '@mui/material/styles';

// export const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#dc004e',
//     },
//   },
// });

// export const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#292929',
//     },
//     secondary: {
//       main: '#121212',
//     },
//   },
// });

import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.8rem",
          padding: "6px 12px",
          borderRadius: "8px",
          backgroundColor: "white",
          color: "black",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#292929",
    },
    secondary: {
      main: "#121212",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.8rem",
          padding: "6px 12px",
          borderRadius: "8px",
          backgroundColor: "#161154",
        },
      },
    },
  },
});
