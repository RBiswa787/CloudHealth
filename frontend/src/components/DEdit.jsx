import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,Grid, Paper,
    CssBaseline,
  RadioGroup,
  FormLabel,
  FormGroup,
  FormControl,
  FormControlLabel, TextField,Tabs,Tab,Box
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@mui/material";
  import { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles((theme) => {
    return ({
        paper: {
            width: '40vw',
            justifyContent: "center",
           
        },
        heading: {
            display: "flex",
            marginTop: "10%",
            color: "#06283D",
            // fontSize: "100%",
            fontFamily: "Arvo, serif",
            fontSize: "36px",
        },
        grid3: {
            width: "50vw",
            marginLeft: "15vw",
        },
        grid1: {
            paddingTop: "10%",
            paddingBottom: "2%",
            fontSize: "3vw",
            fontFamily:"Times New Roman",
        },
        form: {
            position: "absolute",
            left: "32vw",
          padding: "2% 5% 0% 0%" ,
          fontWeight: "bold",
        },
        tab: {
            backgroundColor: "#400CCC",
            margin: "0% 1%",
            borderRadius: "10px",
        },
        dropdownContainer: {
            textAlign: "left",
            border: "1px solid #ccc",
            position: "relative",
            borderRadius: "5px",
          }
          
          ,dropdownInput:  {
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            userSelect: "none",
          }
    });
});
const DEdit = () => {
    const classes = useStyles();
    const [photoURL, setphotoURL] = useState("https://s3-alpha-sig.figma.com/img/9c75/b113/fcd4404eaf49b8a9999e900d320a3dd3?Expires=1668384000&Signature=cvufgVu5p7uMn~nN-nnSNKRGK97j~uNWC~LeAT4~ktkfiSCLhvcHBe4IgNCT-jjfKMMcAEASXlLHhc-eOD7YbJwwLACAI49gityQV4C-yQoSEutbe0EjaNlg~npsTcNYFmWFsBc2ZTa2wPgzW5HSh9WCEIFyvstol85hLGxji5rJx6QOJ6V6tICEV~QND-tk-lueumgnAcgLYwKgF5gZOnSDdcOhv0NT63xFnzN4NJubFq5gt5sq15A4XZDLTJ44LZTnu32p3hlmxy7UjIOXaAMDcm~MwkC8rpjGe2h9jYSU3gbl3wVqHVyT2q5KtRXv6TseDZyoQJ7~zsxbU-1XTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [experience, setExperience] = useState("");
    const [qualification, setQualification] = useState("");
    const [publicDescription, setPublicDescription] = useState("");
    const [imageURL, setImageURL] = useState(photoURL);


    const [photoURLError, setphotoURLError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [dobError,setDOBError] = useState(false);
    const [genderError, setGenderError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [contactError, setContactError] = useState(false);
    const [experienceError, setExperienceError] = useState(false);
    const [qualificationError, setQualificationError] = useState(false);
    const [publicDescriptionError, setPublicDescriptionError] = useState(false);
    
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);}

    const handlePhotoURL = (e) => {
        if (photoURLError == true && e.length > 0) {
            setphotoURLError(false);
        }
        setphotoURL(e);
    };
    const handleName = (e) => {
        if (nameError == true && e.length > 0) {
            setNameError(false);
        }
        setName(e);
    };
    const handleDOB = (e) => {
        if (dobError == true && e.length > 0) {
            setDOBError(false);
        }
        setDOB(e);
    };
    const handleGender = (e) => {
        if (genderError == true && e.length > 0) {
            setGenderError(false);
        }
        setGender(e);
    };
    const handleEmail = (e) => {
        if (emailError == true && e.length > 0) {
            setEmailError(false);
        }
        setEmail(e);
    };
    const handleContact = (e) => {
        if (contactError == true && e.length > 0) {
            setContactError(false);
        }
        setContact(e);
    };
    const handleExperience = (e) => {
        if (experienceError == true && e.length > 0) {
            setExperienceError(false);
        }
        setExperience(e);
    };
    const handleQualification = (e) => {
        if (qualificationError == true && e.length > 0) {
            setQualificationError(false);
        }
        setQualification(e);
    };
    const handlePublicDescription = (e) => {
        if (contactError == true && e.length > 0) {
            setPublicDescriptionError(false);
        }
        setPublicDescription(e);
    };
    const handleUpdate = () => {
        setImageURL(photoURL);
    };
  return (
    <>
      <Grid className={classes.grid1} container justify="center" >
        Edit Profile
      </Grid>
        <Grid className={classes.grid2} container justify="center" >
        <Avatar alt="Remy Sharp" src={imageURL} style={{width:'10vw',height:'10vw',margin:'2% 4% 0% 0%'}}/>
           
           <Paper elevation={0} style={{fontSize:'15px',width:'30vw',lineHeight:'1.8'}}>
              <div style={{fontSize:'25px'}}><b>Dr. R C Sen</b></div>
              <div>MBBS MD Cardiology</div>
              <div>Experience: 5+</div>
              <div>Gender: Male</div>
              <div>Contact: 999999XXXXX</div>
            </Paper>
            
        </Grid>
        <Grid style={{padding:"2%"}} container justify="center" >
        <Button variant="contained" color="primary" onClick={handleUpdate} >
        Update
        </Button>
       </Grid>
       <Grid style={{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"10vh"}} container>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Photo URL: </Typography>
            <TextField className={classes.textField}
                    error={photoURLError}
                    id="photo-URL"
                    label="Photo URL"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={photoURL}
                    onChange={(e) => {
                        handlePhotoURL(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Name: </Typography>
            <TextField className={classes.textField}
                    error={nameError}
                    id="name"
                    label="Name"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={name}
                    onChange={(e) => {
                        handleName(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>DoB: </Typography>
            <TextField className={classes.textField}
                    error={dobError}
                    id="DOB"
                    label="DoB"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={dob}
                    onChange={(e) => {
                        handleDOB(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Gender: </Typography>
            <TextField className={classes.textField}
                    error={genderError}
                    id="gender"
                    label="Gender"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={gender}
                    onChange={(e) => {
                        handleGender(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Email: </Typography>
            <TextField className={classes.textField}
                    error={emailError}
                    id="email"
                    label="Email"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={email}
                    onChange={(e) => {
                        handleEmail(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Contact: </Typography>
            <TextField className={classes.textField}
                    error={contactError}
                    id="contact"
                    label="Contact"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={contact}
                    onChange={(e) => {
                        handleContact(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Experience: </Typography>
            <TextField className={classes.textField}
                    error={experienceError}
                    id="experience"
                    label="Experience"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={experience}
                    onChange={(e) => {
                        handleExperience(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Qualification: </Typography>
            <TextField className={classes.textField}
                    error={experienceError}
                    id="qualification"
                    label="Qualification"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={qualification}
                    onChange={(e) => {
                        handleQualification(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Public Description: </Typography>
            <TextField className={classes.textField}
                    error={experienceError}
                    id="publicDescription"
                    label="Public Description"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={publicDescription}
                    onChange={(e) => {
                        handlePublicDescription(e.target.value);
                    }}
                />
        </Grid>
       </Grid>
       <Grid style={{padding:"2%"}} container justify="center" >
       <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab className={classes.tab} label="Mon" />
          <Tab className={classes.tab} label="Tue" />
          <Tab className={classes.tab} label="Wed" />
          <Tab className={classes.tab} label="Thu" />
          <Tab className={classes.tab} label="Fri" />
          <Tab className={classes.tab} label="Sat" />
          <Tab className={classes.tab} label="Sun" />
        </Tabs>
        </Grid>
        <Grid style={{padding:"2%"}} container justify="center">
        {tabIndex === 0 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Start Time</label>
          <label style={{fontWeight:'bold'}} htmlFor='endTime'>End Time</label><br />
          <select name='startTime' style={{marginRight: '9.5vw'}}>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
          </select>
          <select name='endTime'>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
              <option value="08:00 PM">08:00 PM</option>
          </select>
          </form>
        </Box>
        )}
        {tabIndex === 1 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Start Time</label>
          <label style={{fontWeight:'bold'}} htmlFor='endTime'>End Time</label><br />
          <select name='startTime' style={{marginRight: '9.5vw'}}>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
          </select>
          <select name='endTime'>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
              <option value="08:00 PM">08:00 PM</option>
          </select>
          </form>
        </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <form>
            <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Start Time</label>
            <label style={{fontWeight:'bold'}} htmlFor='endTime'>End Time</label><br />
            <select name='startTime' style={{marginRight: '9.5vw'}}>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
                <option value="07:00 PM">07:00 PM</option>
            </select>
            <select name='endTime'>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
                <option value="07:00 PM">07:00 PM</option>
                <option value="08:00 PM">08:00 PM</option>
            </select>
            </form>
          </Box>
        )}
        {tabIndex === 3 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Start Time</label>
          <label style={{fontWeight:'bold'}} htmlFor='endTime'>End Time</label><br />
          <select name='startTime' style={{marginRight: '9.5vw'}}>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
          </select>
          <select name='endTime'>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
              <option value="08:00 PM">08:00 PM</option>
          </select>
          </form>
        </Box>
        )}
        {tabIndex === 4 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Start Time</label>
          <label style={{fontWeight:'bold'}} htmlFor='endTime'>End Time</label><br />
          <select name='startTime' style={{marginRight: '9.5vw'}}>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
          </select>
          <select name='endTime'>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
              <option value="08:00 PM">08:00 PM</option>
          </select>
          </form>
        </Box>
        )}
        {tabIndex === 5 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Start Time</label>
          <label style={{fontWeight:'bold'}} htmlFor='endTime'>End Time</label><br />
          <select name='startTime' style={{marginRight: '9.5vw'}}>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
          </select>
          <select name='endTime'>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
              <option value="08:00 PM">08:00 PM</option>
          </select>
          </form>
        </Box>
        )}
        {tabIndex === 6 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Start Time</label>
          <label style={{fontWeight:'bold'}} htmlFor='endTime'>End Time</label><br />
          <select name='startTime' style={{marginRight: '9.5vw'}}>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
          </select>
          <select name='endTime'>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
              <option value="08:00 PM">08:00 PM</option>
          </select>
          </form>
        </Box>
        )}
        {tabIndex === 7 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Start Time</label>
          <label style={{fontWeight:'bold'}} htmlFor='endTime'>End Time</label><br />
          <select name='startTime' style={{marginRight: '9.5vw'}}>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
          </select>
          <select name='endTime'>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
              <option value="08:00 PM">08:00 PM</option>
          </select>
          </form>
        </Box>
        )}
        </Grid>
    </>
  )
}

export default DEdit
