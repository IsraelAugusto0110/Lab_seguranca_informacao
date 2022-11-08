import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import apiUser from "../services/api-user";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";

export default function Adm() {
  const [users, setUsers] = useState([]);

  /*Função busca os usuarios que aceitaram receber email */
  const buscar = () => {
    apiUser
      .listEmail()

      .then((res) => {
        console.log(JSON.stringify(res.data));
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEnviaEmail = () => {
    alert("Email enviado");
  };

  useEffect(() => {
    buscar();
  }, []);

  return (
    <Container maxWidth="sm">
      <Card style={{ padding: 15 }}>
        <CardContent>
          <Typography variant="h4" style={{ margin: 5 }}>
            Nome: Fulano
          </Typography>
          <Typography variant="p" style={{ margin: 5 }}>
            Email: Email
          </Typography>
          <Typography variant="p" style={{ margin: 5 }}>
            Aceita emails ?: Sim
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleEnviaEmail(e)}
          >
            Envia Email
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
