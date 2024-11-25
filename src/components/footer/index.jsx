import { Box, Typography } from "@mui/material";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Typography>WorldFlicks TM</Typography>
    </Box>
  );
}
