import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CategoriasPage from "./pages/CategoriasPage";
import RegistroPage from "./pages/RegistroPage";
import CalculosPage from "./pages/CalculosPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const linkBtnSx = {
  color: "white",
  textTransform: "none",
  borderRadius: 2,
  px: 2,
  "&.active": { bgcolor: "rgba(153, 143, 143, 0.12)" },
};

export default function App() {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "green" }}>
        <Toolbar sx={{ gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mr: 2 }}>
            Gestión de Categorías
          </Typography>

          <Button component={NavLink} to="/" end sx={linkBtnSx}>
            Home
          </Button>
          <Button component={NavLink} to="/categorías" sx={linkBtnSx}>
            Categorías
          </Button>
          <Button component={NavLink} to="/nueva categoría" sx={linkBtnSx}>
            Nueva Categoría
          </Button>
          <Button component={NavLink} to="/cálculos" sx={linkBtnSx}>
            Cálculos
          </Button>
          <Button component={NavLink} to="/acerca" sx={linkBtnSx}>
            Información
          </Button>

          <Box sx={{ flex: 1 }} />
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categorías" element={<CategoriasPage/>} />
          <Route path="/nueva categoría" element={<RegistroPage />} />
          <Route path="/cálculos" element={<CalculosPage />} />
          <Route path="/acerca" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>

    <center>

      <Typography variant="h9" sx={{ fontWeight: 800, mr: 2 }}>
        © 2025 - Sistema de Categorías - Taller Académico
      </Typography>
      
    </center>
      
    </>
  );
}