import { React, useEffect, useState, useRef } from "react";
import {
  Paper,
  makeStyles,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

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

const LoginSignUp = () => {  

  const classes = useStyles();
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();

  const [loginToken, setLoginToken] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signUsername, setSignUsername] = useState("");
  const [signName, setSignName] = useState("");
  const [signPassword, setSignPassword] = useState("");

  const [lUserError, setlUserError] = useState(false);
  const [lPassError, setlPassError] = useState(false);
  const [sUserError, setsUserError] = useState(false);
  const [sNameError, setsNameError] = useState(false);
  const [sPassError, setsPassError] = useState(false);

  const loginPassInput = useRef(null);
  const signPassInput = useRef(null);

  const handleLoginUsername = (e) => {
    if (lUserError == true && e.length > 0) {
      setlUserError(false);
    }
    setLoginUsername(e);
  };

  const handleLoginPassword = (e) => {
    if (lPassError == true && e.length > 0) {
      setlPassError(false);
    }
    setLoginPassword(e);
  };

  const handleSignName = (e) => {
    if (sNameError == true && e.length > 0) {
      setsNameError(false);
    }
    setSignName(e);
  };

  const handleSignUsername = (e) => {
    if (sUserError == true && e.length > 0) {
      setsUserError(false);
    }
    setSignUsername(e);
  };

  const handleSignPassword = (e) => {
    if (sPassError == true && e.length > 0) {
      setsPassError(false);
    }
    setSignPassword(e);
  };

  const LoginButton = () => {
    if (loginUsername.length == 0) {
      console.log("Here");
      setlUserError(true);
      return;
    }
    if (loginPassword.length == 0) {
      setlPassError(true);
      return;
    }
    axios({
        method: "GET",
        url: "http://localhost:8686/api/user/signin",
        auth: {
            username: loginUsername,
            password: loginPassword
        }
    }).then((res) => {

        if(res.status != 200){
            loginPassInput.current.value = ""
            alert("Authentication Credentials are not valid")
        }
        else {
            setLoginToken(res.data.access)
            navigate('/dashboard')
        }
    });
  };

  const signDoctorButton = () => {
    if (signName.length == 0) {
      setsNameError(true);
      return;
    }
    if (signUsername.length == 0) {
      setsUserError(true);
      return;
    }
    if (signPassword.length == 0) {
      setsPassError(true);
      return;
    }

    axios({
        method: "POST",
        url: "http://localhost:8686/api/user/signup",
        data: {
            "username":signName,
            "password":signPassword,
            "isDoctor":true
        }
    }).then((res) => {
        if(res.status == 200){
            navigate('/doctorNewProfile')
        }
        else{
            signPassInput.current.value = "";
            alert(res.data.message)
        }
    });
  };

  const signPatientButton = () => {
    if (signName.length == 0) {
      setsNameError(true);
      return;
    }
    if (signUsername.length == 0) {
      setsUserError(true);
      return;
    }
    if (signPassword.length == 0) {
      setsPassError(true);
      return;
    }
    axios({
        method: "POST",
        url: "http://localhost:8686/api/user/signup",
        data: {
          "username":signUsername,
          "password":signPassword,
          "isDoctor":false
        }
    }).then((res) => {
        if(res.status == 200){
            navigate('/patientNewProfile')
        }
        else{
            signPassInput.current.value = "";
            alert(res.data.message)
        }
    });
  };

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
          error={lUserError}
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
          onChange={(e) => {
            handleLoginUsername(e.target.value);
          }}
        />
        <TextField
          id="login-password"
          inputRef={loginPassInput}
          label="Password"
          error={lPassError}
          variant="standard"
          type="password"
          style={{
            display: "flex",
            marginTop: "15%",
            justifySelf: "center",
            width: "50%",
          }}
          value={loginPassword}
          onChange={(e) => {
            handleLoginPassword(e.target.value);
          }}
        />
        <Button
          variant="outlined"
          style={{
            marginTop: "15%",
            width: "30%",
            height: "7.5%",
            borderRadius: "25px",
            fontSize: "125%",
            fontFamily: "Arvo",
          }}
          onClick={LoginButton}
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
          error={sNameError}
          style={{
            display: "flex",
            marginTop: "15%",
            justifySelf: "center",
            width: "50%",
          }}
          value={signName}
          onChange={(e) => {
            handleSignName(e.target.value);
          }}
        />
        <TextField
          id="sign-username"
          label="Username"
          variant="standard"
          error={sUserError}
          style={{
            display: "flex",
            marginTop: "7.5%",
            justifySelf: "center",
            width: "50%",
          }}
          value={signUsername}
          onChange={(e) => {
            handleSignUsername(e.target.value);
          }}
        />
        <TextField
          id="sign-password"
          label="Password"
          variant="standard"
          type="password"
          error={sPassError}
          style={{
            display: "flex",
            marginTop: "7.5%",
            justifySelf: "center",
            width: "50%",
          }}
          value={signPassword}
          inputRef={signPassInput}
          onChange={(e) => {
            handleSignPassword(e.target.value);
          }}
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
              fontFamily: "Arvo",
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
              fontFamily: "Arvo",
            }}
            onClick={signPatientButton}
          >
            SIGN UP AS PATIENT
          </Button>
        </Paper>
      </Paper>
    </div>
  );
};

export default LoginSignUp;
