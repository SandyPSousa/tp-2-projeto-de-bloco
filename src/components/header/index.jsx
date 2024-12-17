import { Box, Typography } from "@mui/material";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home`);
  };

  return (
    <Box component="header" className={styles.header}>
      <Typography variant="h3" onClick={handleClick} sx={{ cursor: "pointer" }}>
        WorldFlicks
      </Typography>
    </Box>
  );
}
