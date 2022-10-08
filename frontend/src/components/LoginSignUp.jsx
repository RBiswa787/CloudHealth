import { React, useState } from "react";
import {
  Paper,
  makeStyles,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import useWindowDimensions from "../Hooks/useWindowDimensions";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    height: "75%",
    width: "35%",
    borderRadius: 30,
    // justifyContent: "center",

    alignItems: "center",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
  },
  heading: {
    display: "flex",
    marginTop: "10%",
    // fontSize: "100%",
    fontFamily: "Arvo, serif",
    fontSize: "36px",
  },
}));

function LoginSignUp() {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signUsername, setSignUsername] = useState("");
  const [signName, setSignName] = useState("");
  const [signPassword, setSignPassword] = useState("");
  
  const[luserError, setlUserError] = useState(false);
  const[lpassError, setlPassError] = useState(false);
  const[suserError, setsUserError] = useState(false);
  const[snameError, setsNameError] = useState(false);
  const[spassError, setsPassError] = useState(false);

  const handleLoginUsername = (e) => {
    if(luserError == true && e.length > 0){
        setlUserError(false);
    }
    setLoginUsername(e);
  }

  const handleLoginPassword = (e) => {
    if(lpassError == true && e.length > 0){
        setlPassError(false);
    }
    setLoginPassword(e);
  }     

  const handleSignName = (e) => {
    if(snameError == true && e.length > 0){
        setsNameError(false);
    }
    setSignName(e);
  }

  const handleSignUsername = (e) => {
    if(suserError == true && e.length > 0){
        setsUserError(false);
    }
    setSignUsername(e);
  }

  const handleSignPassword = (e) => {
    if(spassError == true && e.length > 0){
        setsPassError(false);
    }
    setSignPassword(e);
  }     

  const loginButton = () => {
    if(loginUsername.length == 0){
        console.log("Here");
        setlUserError(true);
        return;
    }
    if(loginPassword.length == 0){
        setlPassError(true);
        return
    }
    return
  }

  const signDoctorButton = () => {
    if(signName.length == 0){
        setsNameError(true);
        return;
    }
    if(signUsername.length == 0){
        setsUserError(true);
        return;
    }
    if(signPassword.length == 0){
        setsPassError(true);
        return;
    }
    return;
  }

  const signPatientButton = () => {
    if(signName.length == 0){
        setsNameError(true);
        return;
    }
    if(signUsername.length == 0){
        setsUserError(true);
        return;
    }
    if(signPassword.length == 0){
        setsPassError(true);
        return;
    }
    return;
  }

  return (
    <div
      style={{
        height: height,
        width: width,
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper className={classes.paper} elevation={20}>
        <Typography className={classes.heading}>LOGIN</Typography>
        <TextField
          error={luserError}
          id="login-username"
          label="Username"
          variant="standard"
          style={{
            display: "flex",
            marginTop: "20%",
            justifySelf: "center",
            width: "50%",
          }}
          value={loginUsername}
          onChange = {(e)=>{handleLoginUsername(e.target.value)}}
        />
        <TextField
          id="login-password"
          label="Password"
          error={lpassError}
          variant="standard"
          type="password"
          style={{
            display: "flex",
            marginTop: "15%",
            justifySelf: "center",
            width: "50%",
          }}
          value={loginPassword}
          onChange = {(e)=>{handleLoginPassword(e.target.value)}}
        />
        <Button
          variant="outlined"
          style={{
            marginTop: "15%",
            width: "30%",
            height: "7.5%",
            borderRadius: "25px",
            fontSize: "125%",
            fontFamily: "Arvo"
          }}
          onClick={loginButton}
        >
          LOGIN
        </Button>
      </Paper>
      <Paper className={classes.paper} elevation={20}>
        <Typography className={classes.heading}>SIGN UP</Typography>
        <TextField
          id="sign-name"
          label="Name"
          variant="standard"
          error = {snameError}
          style={{
            display: "flex",
            marginTop: "15%",
            justifySelf: "center",
            width: "50%",
          }}
          value={signName}
          onChange = {(e)=>{handleSignName(e.target.value)}}
        />
        <TextField
          id="sign-username"
          label="Username"
          variant="standard"
          error={suserError}
          style={{
            display: "flex",
            marginTop: "7.5%",
            justifySelf: "center",
            width: "50%",
          }}
          value={signUsername}
          onChange = {(e)=>{handleSignUsername(e.target.value)}}
        />
        <TextField
          id="sign-password"
          label="Password"
          variant="standard"
          type="password"
          error={spassError}
          style={{
            display: "flex",
            marginTop: "7.5%",
            justifySelf: "center",
            width: "50%",
          }}
          value={signPassword}
          onChange = {(e)=>{handleSignPassword(e.target.value)}}
        />
        <Paper
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "11.5%",
            height: "7.5%",
            width: "65%",
            borderRadius: "25px",
          }}
        >
          <Button
            variant="outlined"
            
            style={{
              width: "50%",
              height: "100%",
              borderRadius: "25px 0 0 25px",
              fontSize: "100%",
              fontFamily: "Arvo"
            }}
            onClick={signDoctorButton}
          >
            SIGN UP AS DOCTOR
          </Button>
          <Button
            variant="outlined"
            style={{
              width: "50%",
              height: "100%",
              borderRadius: "0 25px 25px 0",
              fontSize: "100%",
              fontFamily: "Arvo"
            }}
            onClick={signPatientButton}
          >
            SIGN UP AS PATIENT
          </Button>
        </Paper>
      </Paper>
    </div>
  );
}

export default LoginSignUp;
