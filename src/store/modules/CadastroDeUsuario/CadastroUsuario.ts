import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

export interface Recado {
  ordem: number;
  descricao: string;
  detalhamento: string;
}

export interface Usuario {
  id: number;
  email: string;
  senha: string;
  recados: Recado[];
  ok?: boolean;
}

const usersAdapter = createEntityAdapter<Usuario>({
  selectId: (usuario) => usuario.id,
});

export const { selectAll: buscaUsuarios } = usersAdapter.getSelectors(
  (global: RootState) => global.manipulaUsuario
);

const slice = createSlice({
  name: "manipulaUsuario",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    adcionarUsuario: usersAdapter.addOne,
    atualizarUsuario: usersAdapter.updateOne,
    removerUsuario: usersAdapter.removeOne,
  },
});

export const { adcionarUsuario, atualizarUsuario, removerUsuario } =
  slice.actions;

export default slice.reducer;
