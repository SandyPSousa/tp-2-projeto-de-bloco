import { Box, Typography } from "@mui/material";
import styles from "./navbar.module.css";

export default function Navbar({ children }) {
  return (
    <Box component="nav" className={styles.navbar}>
      <Typography variant="h4">
        Discover Movies from Around the World
      </Typography>
      <Box marginY="1rem">{children}</Box>
    </Box>
  );
}
