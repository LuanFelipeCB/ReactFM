import VisualizaRecado from "../../componentes/visualizarRecado/visualizaRecado";
import { getUsuario } from "../../store/modules/Usuario/UsuarioSlice";
import {
  atualizarUsuario,
  buscaUsuarios,
  Recado,
} from "../../store/modules/CadastroDeUsuario/CadastroUsuario";

import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import LayoutApp from "../../config/Layout";

let cor: string;

let recadosUsuarioLogado: Recado[] = [];
const Recados: React.FC = () => {
  const usuarios = useAppSelector(buscaUsuarios);
  const usuario = useAppSelector(getUsuario);
  const dispatch = useAppDispatch();

  const [ordem] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [detalhamento, setDetalhamento] = useState("");

  const listaRecados: Recado[] = [];

  if (usuario === 0) {
    alert("É preciso estar logado para acessar essa página!");
    window.location.href = "Login";
  }
  const usuarioLogado = usuarios.find((u) => u.id === usuario) ?? usuarios[0];

  console.log("---", usuarioLogado.recados.length);
  const recadosUsuarioLogado1 = usuarioLogado.recados.length;

  recadosUsuarioLogado = usuarioLogado.recados.map((u) => {
    return {
      ordem: u.ordem,
      descricao: u.descricao,
      detalhamento: u.detalhamento,
    };
  });

  console.log("---", recadosUsuarioLogado1);

  const tamRecadosUsuarioLogado = recadosUsuarioLogado.length;

  const posicaoUltimoRecado2 = tamRecadosUsuarioLogado;

  const ultimaOrdem = posicaoUltimoRecado2;

  function adicionaRecado() {
    let objetoNovoRecado: Recado = {
      ordem,
      descricao,
      detalhamento,
    };

    for (let i = 0; i < tamRecadosUsuarioLogado; i++) {
      objetoNovoRecado = {
        ordem: recadosUsuarioLogado[i].ordem,
        descricao: recadosUsuarioLogado[i].descricao,
        detalhamento: recadosUsuarioLogado[i].detalhamento,
      };

      listaRecados.push(objetoNovoRecado);
    }

    const novoRecado: Recado = {
      ordem: ultimaOrdem + 1,
      descricao: descricao,
      detalhamento: detalhamento,
    };

    listaRecados.push(novoRecado);
    dispatch(
      atualizarUsuario({
        id: usuario,
        changes: { recados: listaRecados },
      })
    );
  }

  return (
    <>
      <Grid
        position="relative"
        width="100vw"
        height="100vh"
        display="flex"
        flexDirection="column"
      >
        <Grid position="fixed" width="100vw" height="100vh">
          <LayoutApp />
        </Grid>

        <Grid
          position="relative"
          marginTop="100px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Grid display="flex" flexDirection="row" justifyContent="center">
            <TextField
              label="Digite uma descricao"
              onChange={(e) => setDescricao(e.target.value)}
            />

            <TextField
              label="Digite um detalhamento"
              onChange={(e) => setDetalhamento(e.target.value)}
            />

            <button type="submit" className={cor} onClick={adicionaRecado}>
              OK
            </button>
          </Grid>

          <Grid display="flex" flexDirection="row" justifyContent="center">
            <Grid
              position="relative"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              {recadosUsuarioLogado.map((r) => (
                <VisualizaRecado
                  ordem={r.ordem}
                  descricao={r.descricao}
                  detalhamento={r.detalhamento}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Recados;
