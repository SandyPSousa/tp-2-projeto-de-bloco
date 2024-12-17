import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { Footer, Header } from "../../components";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      setError("Credenciais inválidas.");
      return;
    }

    navigate("/home");
  };

  const handleRegister = () => {
    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    const newUser = { email, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    setError(""); 
    setIsRegistering(false); 
  };

  const toggleRegisterMode = () => {
    setIsRegistering(!isRegistering);
    setEmail("");
    setPassword("");
    setError(""); 
  };

  return (
    <div>
      <Header />
      <Container component="main" maxWidth="xs">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
          <Typography variant="h5" gutterBottom>
            {isRegistering ? "Cadastrar Novo Usuário" : "Login"}
          </Typography>
          {error && (
            <Typography variant="body2" color="error" sx={{ marginBottom: 2 }}>
              {error}
            </Typography>
          )}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={isRegistering ? handleRegister : handleLogin}
          >
            {isRegistering ? "Cadastrar" : "Entrar"}
          </Button>
          <Button
            variant="text"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={toggleRegisterMode}
          >
            {isRegistering ? "Já tem uma conta? Fazer Login" : "Criar uma conta"}
          </Button>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
