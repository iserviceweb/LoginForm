import { Button } from "@mui/material";
import { auth, provider } from "../services/Firebase";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import GoogleIcon from "../assets/google.png";

const GoogleButton = () => {
  const handleGoogleLogin = async () => {
    signInWithPopup(auth, provider);
  };

  return (
    <Button
      onClick={handleGoogleLogin}
      sx={{
        display: "flex",
        gap: "12px",
        marginTop: "1em",
        border: "1px solid #ddd",
        width: "25vw",
      }}
    >
      <img src={GoogleIcon} width="20px" alt="" />
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;
