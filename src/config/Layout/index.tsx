import React from "react";
import { Grid } from "@mui/material";
import Fundo01 from "../../../public/interfaceGrafica/PNG/Página de Recados_sem_fundo/1.png";
import Fundo02 from "../../../public/interfaceGrafica/PNG/Página de Recados_sem_fundo/2.png";
import Fundo03 from "../../../public/interfaceGrafica/PNG/Página de Recados_sem_fundo/Fundo_2_G.png";
import Clips from "../../../public/interfaceGrafica/PNG/Página de Recados_sem_fundo/Clips_G.png";
import Xicara from "../../../public/interfaceGrafica/PNG/Página de Recados_sem_fundo/Xicara.png";
import Coracao from "../../../public/interfaceGrafica/PNG/Página de Recados_sem_fundo/Coracao_G.png";
import Tira from "../../../public/interfaceGrafica/PNG/Página de Recados_sem_fundo/Tira_G.png";

const LayoutApp: React.FC = () => {
  return (
    <>
      <Grid>
        <Grid
          container
          position={"absolute"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Grid
            item
            height="100vh"
            width="100vw"
            component="img"
            src={Fundo01}
          />

          <Grid
            item
            height="75vh"
            width="77vw"
            component="img"
            src={Fundo02}
            position={"absolute"}
          />

          <Grid
            item
            height="25vh"
            width="100vw"
            top="75%"
            component="img"
            src={Fundo03}
            position={"absolute"}
          />

          <Grid
            item
            height="15vh"
            width="19vw"
            top="2.5%"
            right="65%"
            component="img"
            src={Clips}
            position={"absolute"}
          />

          <Grid
            item
            height="45vh"
            width="45vw"
            top="35%"
            right="65%"
            left="  5%"
            component="img"
            src={Xicara}
            position={"absolute"}
          />

          <Grid
            item
            height="10vh"
            width="10vw"
            top="55%"
            right="15%"
            component="img"
            src={Coracao}
            position={"absolute"}
          />
        </Grid>

        <Grid
          item
          height="25vh"
          width="22.5vw"
          top="10%"
          right="9%"
          component="img"
          src={Tira}
          position={"absolute"}
        />
      </Grid>
    </>
  );
};

export default LayoutApp;
