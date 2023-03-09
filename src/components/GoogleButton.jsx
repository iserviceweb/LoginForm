import { Button } from "@mui/material";
import { auth, provider, db } from "../services/Firebase";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import GoogleIcon from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

const GoogleButton = () => {
  // Variables
  const navigate = useNavigate();
  const userRef = collection(db, "users");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      // result.user.photoURL
      const user = result.user;

      // save current user to firestore
      saveCurrentUserToFirestore(user.email, user.displayName, user.photoURL);

      navigate("/", {
        state: {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const saveCurrentUserToFirestore = async (email, name, photo) => {
    try {
      await addDoc(userRef, {userEmail: email, userName: name, userPhoto: photo });
    } catch (error) {
      alert(error.message);
    }
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
