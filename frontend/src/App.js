import "./App.css";
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

import { db } from "./firebase-config";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const emailCollectionRef = collection(db, "email");
  const [email, setEmail] = React.useState("");
  const [aceitaEmail, setAceitaEmail] = React.useState(false);
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = React.useState({});

  const createEmail = async () => {
    await addDoc(emailCollectionRef, {
      nome: nome,
      email: email,
      password: password,
      aceitaEmail: aceitaEmail,
    });
    console.log(email, aceitaEmail);
  };

  const handleChangeAceito = () => {
    setAceitaEmail(!aceitaEmail);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(emailCollectionRef);
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getUsers();
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" style={{ alignSelf: "center", margin: 100 }}>
        Exemplo LGPD
      </Typography>
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography style={{ margin: 15 }}>
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
            onClick={() => createEmail()}
          >
            Enviar
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default App;
