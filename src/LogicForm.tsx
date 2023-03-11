import React, { useState } from "react";
import axios from "axios";
import { Sidebar } from "primereact/sidebar";

type LoginFormProps = {
  onSuccess: () => void;
  onFailure: () => void;
};  

const LoginForm = ({ onSuccess, onFailure }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/login", { username, password });
      const token = response.data.accessToken
      onSuccess();
    } catch (error) {
      onFailure();
      console.error(error);
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Nombre de usuario:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  
  );
};

export default LoginForm;
