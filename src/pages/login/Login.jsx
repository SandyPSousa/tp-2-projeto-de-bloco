import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div style={styles.container}>
      <h1>{isRegistering ? "Cadastrar Novo Usuário" : "Login"}</h1>
      {error && <p style={styles.error}>{error}</p>}
      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={styles.button} onClick={isRegistering ? handleRegister : handleLogin}>
        {isRegistering ? "Cadastrar" : "Entrar"}
      </button>
      <button style={styles.toggleButton} onClick={toggleRegisterMode}>
        {isRegistering ? "Já tem uma conta? Fazer Login" : "Criar uma conta"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
    width: "300px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  toggleButton: {
    marginTop: "10px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    color: "#007bff",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};
