

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/theme"; // Seus temas
import { useState, useEffect } from "react";
import { router } from "./router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppWithTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(savedTheme === "dark");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <Button variant="contained" onClick={toggleTheme} style={{ position: "absolute", top: 20, right: 20 }}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(<AppWithTheme />);
