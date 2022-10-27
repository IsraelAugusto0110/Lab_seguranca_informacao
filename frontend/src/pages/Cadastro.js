import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import apiUser from "../services/api-user";

export default function Cadastro() {
  const [email, setEmail] = React.useState("");
  const [aceitaEmail, setAceitaEmail] = React.useState(false);
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
    console.log(
      `Nome: ${nome}\nEmail: ${email}\nAceita emails?: ${
        aceitaEmail ? "Sim" : "Não"
      }`
    );
  };

  const handleChangeAceito = () => {
    setAceitaEmail(!aceitaEmail);
  };

  const cadastro = (e) => {
    e.preventDefault();
    const body = {
      nome: nome,
      email: email,
      senha: senha,
      aceitaEmail: aceitaEmail ? "Sim" : "Não",
    };
    apiUser
      .criar(body)
      .then((res) => {
        console.log(res);
        console.log("Usuario adicionado");
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
            type="text"
            label="Insira seu nome"
            placeholder="Insira seu nome"
            style={{ width: 500, marginBottom: 15 }}
            onChange={(e) => setNome(e.target.value)}
          />
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
            label="Insira uma senha forte"
            placeholder="password"
            style={{ width: 500, marginBottom: 15 }}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Typography style={{ margin: 5 }}>
            Gostaria de receber emails com atualizações e novidades?
          </Typography>
          <Typography style={{ margin: 5 }}>
            PS:Não divulgaremos seus dados
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox onChange={handleChangeAceito} />}
              label="Aceito"
            />
          </FormGroup>

          <Button
            variant="contained"
            color="primary"
            onClick={(e) => cadastro(e)}
          >
            Enviar
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
