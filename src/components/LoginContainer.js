import React, { useState } from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleButton from "./GoogleButton";
import { auth } from "../services/Firebase";
import { useNavigate } from "react-router-dom";
// Firebase Imports
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginContainer = () => {
  // Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  // Event Handlers
  const handleLogin = async () => {
    // console.log(email);
    // console.log(password);
    if(email === "" || password === ""){
      setErrorMsg("Email and Password can't be empty!");
      return;
    }
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      // console.log(response);
      navigate("/");
    } catch(error){
      setErrorMsg(error.message);
    }
  }

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
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
        />
        {/* Password */}
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type={"password"}
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleLogin}
          style={{
            backgroundColor: "#FD3101",
            width: "25vw",
            marginTop: "1em",
          }}
          variant="contained"
        >
          Log In
        </Button>
        <GoogleButton />
      </Box>
      {errorMsg && <span style={{color: "red", margin: "1em"}}><p>{errorMsg}</p></span>}
    </Container>
  );
};

export default LoginContainer;
