import React from "react";
import { Grid } from "@mui/material";

interface FormProps {
  textButton?: string;
  textLabel?: string;
  children: React.ReactNode;
  width?: string;
}

const Form: React.FC<FormProps> = ({ children }) => {
  return (
    <>
      <Grid
        container
        width="100vw"
        marginTop="30vh"
        position="relative"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
