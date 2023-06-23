import React from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { buscaUsuarios } from "../../store/modules/CadastroDeUsuario/CadastroUsuario";
import { Link } from "react-router-dom";
import Form from "../../shared_components/Form";
import { useState } from "react";
import { adc } from "../../store/modules/Usuario/UsuarioSlice";
import LayoutApp from "../../config/Layout";

const Login: React.FC = () => {
  const usuarios = useAppSelector(buscaUsuarios);
  const dispatch = useAppDispatch();
  const [id] = useState<number>(1);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function efetuarLogin() {
    const usuarioLogin = usuarios
      .filter(
        (usuario) =>
          usuario.id === id &&
          usuario.email === email &&
          usuario.senha === senha
      )
      .map((u) => {
        return {
          id: u.id,
        };
      });

    if (usuarioLogin.length === 0) {
      alert("E-mail ou senha incorretos! Verifique e tente novamente!");
      return;
    }

    const idUsuarioLogin = usuarioLogin[0].id;

    dispatch(adc(idUsuarioLogin));

    window.location.href = "Recados";
  }

  return (
    <>
      <Grid
        position={"relative"}
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <LayoutApp />

        <Form>
          <TextField
            label="Digite seu e-mail"
            sx={{
              position: "relative",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Digite sua senha"
            sx={{
              position: "relative",
            }}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              position: "relative",
              marginTop: "10px",
            }}
            onClick={efetuarLogin}
          >
            Fazer login
          </Button>
          <Link to={"/recados"}>Ainda não tem conta? Cadastre-se aqui</Link>
        </Form>
      </Grid>
    </>
  );
};

export default Login;
