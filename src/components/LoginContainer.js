import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginContainer = () => {
  return (
    <Container style={{ padding: "1em" }}>
      <Typography variant="h3" color={"#000"} gutterBottom>
        💫 Login
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25vw" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        {/* Email Input */}
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        {/* Password */}
        <TextField
          id="outlined-basic"
          label="Password"
          type={"password"}
          variant="outlined"
        />
      </Box>
      <Button style={{backgroundColor:"#FD3101", width:"25vw", marginTop:"1em"}} variant="contained">Log In</Button>
    </Container>
  );
};

export default LoginContainer;
