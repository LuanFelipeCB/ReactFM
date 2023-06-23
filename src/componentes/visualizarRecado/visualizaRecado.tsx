import { Recado } from "../../store/modules/Recados/RecadosSlice";
import { atualizarUsuario } from "../../store/modules/CadastroDeUsuario/CadastroUsuario";
import { getUsuario } from "../../store/modules/Usuario/UsuarioSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Grid, Typography } from "@mui/material";
import { buscaUsuarios } from "../../store/modules/CadastroDeUsuario/CadastroUsuario";
const VisualizaRecado: React.FC<Recado> = ({
  ordem,
  descricao,
  detalhamento,
}) => {
  const usuarios = useAppSelector(buscaUsuarios);
  const usuario = useAppSelector(getUsuario);
  const dispatch = useAppDispatch();

  const atualizaRecado = () => {
    const listaRecadosAtualizada: Recado[] = [];

    const usuarioLogado = usuarios.find((u) => u.id === usuario) ?? usuarios[0];

    const recadosUsuarioLogado = usuarioLogado.recados.map((u) => {
      return {
        ordem: u.ordem,
        descricao: u.descricao,
        detalhamento: u.detalhamento,
      };
    });

    const ordemAtual = ordem;

    const recadoAtualUsuarioLogado = recadosUsuarioLogado.find(
      (u) => u.ordem === ordemAtual
    );

    const novaDescricao =
      window.prompt(
        "Informe a descrição ou clique em ok para continuar sem alterar"
      ) || "";
    const novoDetalhamento =
      prompt(
        "Informe o detalhamento ou clique em 'ok' para continuar sem alterar"
      ) || "";

    let objetoRecadoAtualzado: Recado = {
      ordem,
      descricao,
      detalhamento,
    };

    if (novaDescricao === "" && novoDetalhamento === "") {
      objetoRecadoAtualzado = {
        ordem: ordemAtual,
        descricao: recadoAtualUsuarioLogado?.descricao ?? "",
        detalhamento: recadoAtualUsuarioLogado?.detalhamento ?? "",
      };
    } else if (!(novaDescricao === "") && !(novoDetalhamento === "")) {
      objetoRecadoAtualzado = {
        ordem: ordemAtual,
        descricao: novaDescricao,
        detalhamento: novoDetalhamento,
      };
    } else if (novaDescricao === "" && !(novoDetalhamento === "")) {
      objetoRecadoAtualzado = {
        ordem: ordemAtual,
        descricao: recadoAtualUsuarioLogado?.descricao ?? "",
        detalhamento: novoDetalhamento,
      };
    } else if (!(novaDescricao === "") && novoDetalhamento === "") {
      objetoRecadoAtualzado = {
        ordem: ordemAtual,
        descricao: novaDescricao,
        detalhamento: recadoAtualUsuarioLogado?.detalhamento ?? "",
      };
    }

    const tamRecadosUsuarioLogado = recadosUsuarioLogado.length - 1;

    let objetoAux: Recado = {
      ordem: 0,
      descricao,
      detalhamento,
    };

    for (let i = 0; i <= tamRecadosUsuarioLogado; i++) {
      objetoAux = {
        ordem: recadosUsuarioLogado[i].ordem,
        descricao: recadosUsuarioLogado[i].descricao,
        detalhamento: recadosUsuarioLogado[i].detalhamento,
      };
      listaRecadosAtualizada.push(objetoAux);
    }

    listaRecadosAtualizada[0] = objetoRecadoAtualzado;

    dispatch(
      atualizarUsuario({
        id: usuario,
        changes: { recados: listaRecadosAtualizada },
      })
    );
  };

  const removeRecado = () => {
    const listaRecadosAtualizada: Recado[] = [];

    const usuarioLogado = usuarios.find((u) => u.id === usuario) ?? usuarios[0];

    const ordemAtual = ordem;
    const recadosUsuarioLogado1 = usuarioLogado.recados.map((u) => {
      return {
        ordem: u.ordem,
        descricao: u.descricao,
        detalhamento: u.detalhamento,
      };
    });

    const recadosUsuarioLogado2 = usuarioLogado.recados.map((u) => {
      if (u.ordem === ordemAtual) {
        return {
          ordem: u.ordem,
          descricao: u.descricao,
          detalhamento: u.detalhamento,
        };
      }
      listaRecadosAtualizada.push(u);
    });

    console.log("bxza", recadosUsuarioLogado1);
    console.log("bxza", recadosUsuarioLogado2);
    console.log("bx", listaRecadosAtualizada);

    dispatch(
      atualizarUsuario({
        id: usuario,
        changes: { recados: listaRecadosAtualizada },
      })
    );
  };

  return (
    <>
      <Grid
        container
        paddingLeft="30px"
        paddingTop="10px"
        paddingBottom="5px"
        width="50vw"
        display="relative"
        marginTop="60px"
        borderRadius={8}
        boxShadow="10px 11px 19px 5px #b5dddf"
      >
        <Grid item>
          <Typography variant="h6">Descriçao: {descricao}</Typography>
          <Typography variant="h6">Detalhamento: {detalhamento}</Typography>
        </Grid>

        <Grid item width="100vw">
          <center>
            <button onClick={atualizaRecado}>Editar</button>
            <button onClick={removeRecado}>Apagar</button>
          </center>
        </Grid>
      </Grid>
    </>
  );
};

export default VisualizaRecado;
