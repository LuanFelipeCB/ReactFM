import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

export interface Recado {
  ordem: number;
  descricao: string;
  detalhamento: string;
}

const userAdapter = createEntityAdapter<Recado>({
  selectId: (recado) => recado.ordem,
});

export const { selectAll: buscaRecados } = userAdapter.getSelectors(
  (global: RootState) => global.manipulaRecado
);

const slice = createSlice({
  name: "manipulaRecado",
  initialState: userAdapter.getInitialState(),
  reducers: {
    adicionarRecado: userAdapter.addOne,
    atualizarRecado: userAdapter.updateOne,
    removerRecado: userAdapter.removeOne,
  },
});

export const { adicionarRecado, atualizarRecado, removerRecado } =
  slice.actions;

export default slice.reducer;
