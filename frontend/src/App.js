import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";

import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          sm={10}
          md={8}
          lg={6}
          justify="center"
          style={{
            backgroundColor: "#702963",
            margin: "auto",
            justifyContent: "center",
          }}
          wrap="nowrap"
        >
          <Box mr={2} my={1}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button style={{ color: "#ffff" }} variant="text">
                Home
              </Button>
            </Link>
          </Box>
          <Box mr={2} my={1}>
            <Link to="/cadastro" style={{ textDecoration: "none" }}>
              <Button style={{ color: "#ffff" }} variant="text">
                Cadastro
              </Button>
            </Link>
          </Box>
          <Box mr={2} my={1}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button style={{ color: "#ffff" }} variant="text">
                Login
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
