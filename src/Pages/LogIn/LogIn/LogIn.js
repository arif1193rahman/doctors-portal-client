import { Container, Button, CircularProgress, Alert } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import logIn from "../../../images/login.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useHistory } from "react-router-dom";

const LogIn = () => {
  const [logInData, setLogInData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logInData };
    newLoginData[field] = value;
    setLogInData(newLoginData);
    console.log(value, field);
  };
  const handleLogInSubmit = (e) => {
 loginUser(logInData.email, logInData.password, location, history); 
    e.preventDefault();
  };

  const handleGoogleSignIn=(location, history)=>{
    signInWithGoogle(location, history);
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Log In
          </Typography>

          <form onSubmit={handleLogInSubmit}>
           
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              type="password"
              id="standard-basic"
              label="Your password"
              name="password"
              onBlur={handleOnChange}
              variant="standard"
            />

            <Button
              type="submit"
              sx={{ width: "75%", m: 1 }}
              variant="contained"
            >
              Log In
            </Button>
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <Button variant="text">New User ? Please Register</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && 
              <Alert severity="success">
                This is a success alert — check it out!
              </Alert>
            }
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>----------------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>

        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={logIn} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LogIn;
