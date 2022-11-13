import React from 'react'
import Navbar from '../components/Navbar';
import axios from 'axios';
import moment from 'moment';
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
  FormControlLabel, TextField,Tab,Tabs
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@mui/material";
  import { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
import { ClassNames } from '@emotion/react';
let dates=[
    {
        "date":15,
        "month":"Nov",
        "year":2022,
    },
    {
        "date":16,
        "month":"Nov",
        "year":2022,
    },
    {
        "date":17,
        "month":"Nov",
        "year":2022,
    },
    {
        "date":18,
        "month":"Nov",
        "year":2022,
    },
    {
        "date":19,
        "month":"Nov",
        "year":2022,
    },
    {
        "date":20,
        "month":"Nov",
        "year":2022,
    },
    {
        "date":21,
        "month":"Nov",
        "year":2022,
    },
]

const useStyles = makeStyles((theme) => {
    return ({
        paper: {
            width: '40vw',
            justifyContent: "center",
           
        },
        tab: {
            backgroundColor: "#400CCC",
            margin: "0% 1%",
            borderRadius: "10px",
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
        }
    });
});
const DocProfile = () => {
    const doc_username = window.localStorage.getItem('doc_username');
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);}
    
    const [TphotoURL, setTphotoURL] = useState("");
    const [Tname, setTName] = useState("");
    const [Treg, setTReg] = useState("");
    const [Tspec, setTSpec] = useState("");
    const [Tdob, setTDOB] = useState("");
    const [Tgender, setTGender] = useState("");
    const [Temail, setTEmail] = useState("");
    const [Tcontact, setTContact] = useState("");
    const [Texperience, setTExperience] = useState("");
    const [Tqualification, setTQualification] = useState("");
    const [TpublicDescription, setTPublicDescription] = useState("");
    const [Tslots, setTSlots] = useState([]);
    
    
    let days = [];
    let daysRequired = 7

    for (let i = 1; i <= daysRequired; i++) {
    days.push( moment().add(i, 'days').format('MMM Do YY') )
    }

    let localslots = {0:[],1:[],2:[],3:[],4:[],5:[],6:[]};

    for(let i=0;i<7;i++){
        localslots[i].push(`${Tslots[i]}:00 - ${Tslots[i]}:10`);
        localslots[i].push(`${Tslots[i]}:10 - ${Tslots[i]}:20`);
        localslots[i].push(`${Tslots[i]}:20 - ${Tslots[i]}:30`);
        localslots[i].push(`${Tslots[i]}:30 - ${Tslots[i]}:40`);
        localslots[i].push(`${Tslots[i]}:40 - ${Tslots[i]}:50`);
        localslots[i].push(`${Tslots[i]}:50 - ${Tslots[i]+1}:00`);
        localslots[i].push(`${Tslots[i]+1}:00 - ${Tslots[i]+1}:10`);
        localslots[i].push(`${Tslots[i]+1}:10 - ${Tslots[i]+1}:20`);
        localslots[i].push(`${Tslots[i]+1}:20 - ${Tslots[i]+1}:30`);
        localslots[i].push(`${Tslots[i]+1}:30 - ${Tslots[i]+1}:40`);
        localslots[i].push(`${Tslots[i]+1}:40 - ${Tslots[i]+1}:50`);
        localslots[i].push(`${Tslots[i]+1}:50 - ${Tslots[i]+2}:00`);
    }
    console.log(localslots);

    
    useEffect(() => {
        axios.post("http://localhost:8787/api/doctor/find",{"username":doc_username})
        .then(res => {
            setTphotoURL(res.data.photo_url);
            setTName(res.data.name);
            setTReg(res.data.reg_num);
            setTSpec(res.data.specialisation);
            setTDOB(res.data.dob);
            setTGender(res.data.gender);
            setTEmail(res.data.email);
            setTExperience(res.data.experience);
            setTQualification(res.data.qualification);
            setTSlots(res.data.slots);
            setTPublicDescription(res.data.description);
            setTSlots(res.data.slots);
        });
    },[]);
  return (
    <>
        <Navbar></Navbar>
        <Grid className={classes.grid1} container justify="center">
        <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/9c75/b113/fcd4404eaf49b8a9999e900d320a3dd3?Expires=1668384000&Signature=cvufgVu5p7uMn~nN-nnSNKRGK97j~uNWC~LeAT4~ktkfiSCLhvcHBe4IgNCT-jjfKMMcAEASXlLHhc-eOD7YbJwwLACAI49gityQV4C-yQoSEutbe0EjaNlg~npsTcNYFmWFsBc2ZTa2wPgzW5HSh9WCEIFyvstol85hLGxji5rJx6QOJ6V6tICEV~QND-tk-lueumgnAcgLYwKgF5gZOnSDdcOhv0NT63xFnzN4NJubFq5gt5sq15A4XZDLTJ44LZTnu32p3hlmxy7UjIOXaAMDcm~MwkC8rpjGe2h9jYSU3gbl3wVqHVyT2q5KtRXv6TseDZyoQJ7~zsxbU-1XTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" style={{width:'12vw',height:'12vw',margin:'2% 4% 0% 0%'}}/>
           
           <Paper elevation={0} style={{fontSize:'15px',width:'40vw',lineHeight:'1.8'}}>
              <div style={{fontSize:'25px'}}><b>{Tname}</b></div>
              <div>{Tqualification} {Tspec}</div>
              <div>Experience: {Texperience}</div>
              <div>{TpublicDescription}</div>
              <div>Fees: Rs. 700</div>
            </Paper>
        </Grid>
        <Grid style={{padding:"2%",fontSize:"20px"}} container justify="center" >
            Book An Appointment
        </Grid>
        <Grid style={{padding:"2%"}} container justify="center" >
       <Tabs value={tabIndex} onChange={handleTabChange}>
        {
            days.map(
                (day) => (<Tab className={classes.tab} style={{color:"white"}} label={day}/>)
            )
        }
        </Tabs>
        </Grid>
        <Grid style={{padding:"2% 20%"}} container justify="center">
            {
                Tslots[tabIndex]==0 && (
                    <Typography style={{justifySelf:"center",fontSize:34}}>Doctor is not available!</Typography>
                )
            }
            {
                Tslots[tabIndex]!=0 &&

                (localslots[tabIndex].map(
                    (record) => (
                        <Button variant="contained" style={{border:"1px solid blue",margin:" 2% 5%"}}>{record}</Button>
                    )
                ))
            }
        </Grid>
        <Grid style={{padding:"2%"}} container justify="center" >
        <Button variant="contained" color="primary">
        Confirm
        </Button>
       </Grid>
    </>
  )
}

export default DocProfile
