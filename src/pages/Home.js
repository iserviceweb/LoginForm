import { Box, Button, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../services/Firebase";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  // Variables
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  // Event Handlers
  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <Box
      sx={{ display: "flex", margin: "1em", gap: "16px" }}
      flexDirection="column"
      alignItems={"center"}
    >
      <Typography variant="h2" gutterBottom>
        🏡 Home
      </Typography>
      <br />
      <Typography>Hi, {state.name}</Typography>
      <img src={state.photo} style={{borderRadius: "50%"}} alt="" />
      <Button variant="contained" onClick={handleSignOut}>
        Sign Out
      </Button>
    </Box>
  );
};

export default Home;
