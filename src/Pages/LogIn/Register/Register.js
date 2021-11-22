import { Container, Button, Alert } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import logIn from "../../../images/login.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";

const Register = () => {
  const [logInData, setLogInData] = useState({});
  const history = useHistory();

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logInData };
    newLoginData[field] = value;
    setLogInData(newLoginData);
    console.log(value, field);
  };
  const handleLogInSubmit = (e) => {
    if (logInData.password !== logInData.password2) {
      alert("Your Pass did not match");
    }
    registerUser(logInData.email, logInData.password, logInData.name,history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>

          {!isLoading && (
            <form onSubmit={handleLogInSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                type="password"
                id="standard-basic"
                label="Your password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                type="password"
                id="standard-basic"
                label="Retype password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard"
              />

              <Button
                type="submit"
                sx={{ width: "75%", m: 1 }}
                variant="contained"
              >
                Register
              </Button>
              <NavLink to="/logIn" style={{ textDecoration: "none" }}>
                <Button variant="text">Already Register ? Please Log in</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && 
            <Alert severity="success">
              This is a success alert — check it out!
            </Alert>
          }
          {authError && <Alert severity="error">{authError}</Alert>
}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={logIn} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
