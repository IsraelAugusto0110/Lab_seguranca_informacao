import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import apiUser from "../services/api-user";
import { DataGrid } from "@mui/x-data-grid";

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

  const columns = [
    { field: "nome", headerName: "Nome", width: 100 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "aceitaemail", headerName: "aceitaEmail?", width: 130 },
    {
      field: "enviar",
      headerName: "Ações",
      width: 130,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            handleEnviaEmail(e);
          }}
        >
          Enviar
        </Button>
      ),
    },
  ];

  const rows = [...users];

  return (
    <Container maxWidth="sm" style={{ height: 500 }}>
      <Typography variant="h5" style={{ margin: 5 }}>
        Tela de administrador: confirmar envio de emails
      </Typography>
      <DataGrid
        style={{ margin: 20, padding: 10, width: "100%" }}
        columns={columns}
        rows={rows}
      />
    </Container>
  );
}
