import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { isValidEmail } from "../utils/validator";
import "./Login.scss";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    height: 500,
    backgroundColor: "#fff",
    width: "30vw",
    borderRadius: 20,
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const classes = useStyles();
  const loginTitle = showRegisterForm ? "Register Now!" : "Welcome Back!";
  const linkMessage = showRegisterForm
    ? "Already have an account? Login!"
    : "Don't have an account? Register!";
  const loginButtonTitle = showRegisterForm ? "Register" : "Login";

  return (
    <div className="login">
      <form className={classes.root} noValidate autoComplete="off">
        <h1>{loginTitle}</h1>
        <br />
        <TextField
          type="email"
          id="outlined-email"
          label="Email"
          variant="outlined"
          className="textField"
          error={!email || !isValidEmail(email)}
          helperText={"Email is invalid."}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-password"
          label="Password"
          type="password"
          variant="outlined"
          className="textField"
          error={!password || password.length < 8}
          helperText={"Password must be atleast 8 characters long."}
          onChange={e => setPassword(e.target.value)}
        />
        {showRegisterForm && (
          <TextField
            id="outlined-password-confirm"
            label="Password Confirm"
            type="password"
            variant="outlined"
            className="textField"
            error={password !== passwordConfirm}
            helperText={"Passwords must match"}
            onChange={e => setPasswordConfirm(e.target.value)}
          />
        )}
        <button className="login-btn">{loginButtonTitle}</button>
        <a onClick={() => setShowRegisterForm(!showRegisterForm)}>
          {linkMessage}
        </a>
      </form>
    </div>
  );
}
export default Login;
