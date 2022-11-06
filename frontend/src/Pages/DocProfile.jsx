import React from 'react'
import Navbar from '../components/Navbar'
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
let slots = [
    {
        "starttime":"09:00",
        "endtime":"09:10",
    },
    {
        "starttime":"09:10",
        "endtime":"09:20",
    },
    {
        "starttime":"09:20",
        "endtime":"09:30",
    },
    {
        "starttime":"09:30",
        "endtime":"09:40",
    },
    {
        "starttime":"09:40",
        "endtime":"09:50",
    },
    {
        "starttime":"09:50",
        "endtime":"10:00",
    },
    {
        "starttime":"10:00",
        "endtime":"10:10",
    },
    {
        "starttime":"10:10",
        "endtime":"10:20",
    },
    {
        "starttime":"10:20",
        "endtime":"10:30",
    },
    {
        "starttime":"10:30",
        "endtime":"10:40",
    },
    {
        "starttime":"10:40",
        "endtime":"10:50",
    },
    {
        "starttime":"10:50",
        "endtime":"11:00",
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
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);}
  return (
    <>
        <Navbar></Navbar>
        <Grid className={classes.grid1} container justify="center">
        <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/9c75/b113/fcd4404eaf49b8a9999e900d320a3dd3?Expires=1668384000&Signature=cvufgVu5p7uMn~nN-nnSNKRGK97j~uNWC~LeAT4~ktkfiSCLhvcHBe4IgNCT-jjfKMMcAEASXlLHhc-eOD7YbJwwLACAI49gityQV4C-yQoSEutbe0EjaNlg~npsTcNYFmWFsBc2ZTa2wPgzW5HSh9WCEIFyvstol85hLGxji5rJx6QOJ6V6tICEV~QND-tk-lueumgnAcgLYwKgF5gZOnSDdcOhv0NT63xFnzN4NJubFq5gt5sq15A4XZDLTJ44LZTnu32p3hlmxy7UjIOXaAMDcm~MwkC8rpjGe2h9jYSU3gbl3wVqHVyT2q5KtRXv6TseDZyoQJ7~zsxbU-1XTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" style={{width:'12vw',height:'12vw',margin:'2% 4% 0% 0%'}}/>
           
           <Paper elevation={0} style={{fontSize:'15px',width:'40vw',lineHeight:'1.8'}}>
              <div style={{fontSize:'25px'}}><b>Dr. R C Sen</b></div>
              <div>MBBS MD Cardiology</div>
              <div>Experience: 5+</div>
              <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
              <div>Fees: Rs. 700</div>
            </Paper>
        </Grid>
        <Grid style={{padding:"2%",fontSize:"20px"}} container justify="center" >
            Book An Appointment
        </Grid>
        <Grid style={{padding:"2%"}} container justify="center" >
       <Tabs value={tabIndex} onChange={handleTabChange}>
        {
            dates.map(
                (record) => (<Tab className={classes.tab} label={record.date+" "+record.month+" "+record.year}/>)
            )
        }
        </Tabs>
        </Grid>
        <Grid style={{padding:"2% 20%"}} container justify="center">
            {
                slots.map(
                    (record) => (
                        <Button variant="contained" style={{border:"1px solid blue",margin:" 2% 5%"}}>{record.starttime} - {record.endtime}</Button>
                    )
                )
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
