import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import loginImage from "./assets/gradient.jpg";
import LoginContainer from "./components/LoginContainer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  height: "100vh",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* 12 column layout */}
      <Grid container>
        <Grid item xs={6}>
          <Item>
            <img width="100%" height="100%" src={loginImage} alt="" />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <LoginContainer />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
