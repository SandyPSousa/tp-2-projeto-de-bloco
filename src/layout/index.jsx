import { Box, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer, Header, Navbar, Search } from "../components";
import { MoviesProvider } from "../contexts/movies";

export function Layout() {
  return (
    <MoviesProvider>
      <CssBaseline />
      <Container>
        <Header />
        <Navbar>
          <Search />
        </Navbar>
        <Box component="main">
          <Outlet />
        </Box>
        <Footer />
      </Container>
    </MoviesProvider>
  );
}
