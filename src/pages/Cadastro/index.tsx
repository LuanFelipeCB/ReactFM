import React, { useState } from "react";
import Form from "../../shared_components/Form";
import { Button, TextField, Grid } from "@mui/material";
import LayoutApp from "../../config/Layout";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  adcionarUsuario,
  buscaUsuarios,
} from "../../store/modules/CadastroDeUsuario/CadastroUsuario";
import { Link } from "react-router-dom";

const Cadastro: React.FC = () => {
  const [novoIdUsuario] = useState(0);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [reSenha, setResenha] = useState("");
  const [ok, setOk] = useState(false);

  const usuarios = useAppSelector(buscaUsuarios);

  const dispatch = useAppDispatch();
  const tamUsuariosID = usuarios.length;
  const posicaoUsuariosID = tamUsuariosID - 1;

  let idUser = 0;

  function AdicionaUsuario() {
    if (tamUsuariosID == 0) {
      idUser = novoIdUsuario;
    } else {
      idUser = usuarios[posicaoUsuariosID].id;
    }

    const e_mail = email;
    const password = senha;
    const rePassaword = reSenha;

    if (password !== rePassaword) {
      alert("Senhas diferentes!");
    } else {
      dispatch(
        adcionarUsuario({
          id: idUser + 1,
          email: e_mail,
          senha: password,
          recados: [],
        })
      );
      setOk(true);
    }
  }
  if (ok === true) {
    idUser = usuarios[posicaoUsuariosID].id;
    alert(`Cadastro efetuado com sucesso! Registre seu id único: ${idUser}`);
    setOk(false);
  }

  return (
    <>
      <Grid
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <LayoutApp />
        <Form width="100vw">
          <TextField
            label="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Digite uma senha"
            sx={{
              marginTop: "10px",
            }}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <TextField
            label="Digite a senha novamente"
            sx={{
              marginTop: "10px",
            }}
            value={reSenha}
            onChange={(e) => setResenha(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              marginTop: "10px",
            }}
            onClick={AdicionaUsuario}
          >
            Cadastrar
          </Button>
          <Link to={"/recados"}>Ainda não tem conta? Cadastre-se aqui</Link>
        </Form>
      </Grid>
    </>
  );
};

export default Cadastro;
