import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

const usuariosInicio = 0;

const slice = createSlice({
  name: "usuario",
  initialState: usuariosInicio,
  reducers: {
    adc: (state, parametro: PayloadAction<number>) => (
      (state = 0), (state = state + parametro.payload)
    ),
  },
});

export const { adc } = slice.actions;

export const getUsuario = (state: RootState) => state.usuario;

export default slice.reducer;
