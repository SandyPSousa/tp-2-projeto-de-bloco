import { Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("user"); 
    navigate("/login"); 
  };

  return (
    <Box component="nav" className={styles.navbar}>
      <Typography variant="h4">
        Discover Movies from Around the World
      </Typography>
      <Box marginY="1rem" display="flex" justifyContent="space-between">
        <Button color="inherit" component={Link} to="/favorites">
         Favorites ❤️
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          Logout 🚪
        </Button>
      </Box>
      {children}
    </Box>
  );
}
