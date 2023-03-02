import { Box, Button, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../services/Firebase";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Variables
  const navigate = useNavigate();

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
      <Button variant="contained" onClick={handleSignOut}>
        Sign Out
      </Button>
    </Box>
  );
};

export default Home;
