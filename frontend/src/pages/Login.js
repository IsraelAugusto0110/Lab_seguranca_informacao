import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, CardActions, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import apiUser from "../services/api-user";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email === "123@gmail" && senha === "123") {
      console.log(`usuário ${email}, logado com sucesso`);
    } else {
      console.log("Usuário ou senha invalidos.");
    }
  };

  const login = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      senha: senha,
    };
    apiUser
      .login(body)
      .then((res) => {
        console.log(res.data.message, res.data.body.usuario.email);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container maxWidth="sm">
      {/* Card para se inscrever no serviço de email */}
      <Card style={{ padding: 15 }}>
        <CardContent>
          <TextField
            variant="outlined"
            type="email"
            label="Insira seu email"
            placeholder="seuemail@email"
            style={{ width: 500, marginBottom: 15 }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            type="password"
            label="Insira sua senha"
            placeholder="password"
            style={{ width: 500, marginBottom: 15 }}
            onChange={(e) => setSenha(e.target.value)}
          />
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={(e) => login(e)}>
            Login
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
