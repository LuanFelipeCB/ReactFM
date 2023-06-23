import { combineReducers } from "@reduxjs/toolkit";
import manipulaUsuario from "./CadastroDeUsuario/CadastroUsuario";
import usuario from "./Usuario/UsuarioSlice";
import manipulaRecado from "./Recados/RecadosSlice";

export default combineReducers({
  manipulaUsuario,
  usuario,
  manipulaRecado,
});
