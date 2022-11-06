import React from 'react'
import Navbar from '../components/Navbar'
import {
    AppBar,
    Toolbar,
    Typography,InputBase,
    makeStyles,alpha,
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
  FormControlLabel, TextField
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@mui/material";
  import { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
import { ClassNames } from '@emotion/react';
let appointments = [
    {
        "docName":"Dr. R C Sen",
        "speciality":"Cardiologist",
        "date":"29 November 2022",
        "time":"09:10 AM - 09:20 AM",
    },
    {
        "docName":"Dr. R C Sen",
        "speciality":"Cardiologist",
        "date":"29 November 2022",
        "time":"09:10 AM - 09:20 AM",
    },
]
let doctors = [
    {
        "docPic":"https://s3-alpha-sig.figma.com/img/9c75/b113/fcd4404eaf49b8a9999e900d320a3dd3?Expires=1668384000&Signature=cvufgVu5p7uMn~nN-nnSNKRGK97j~uNWC~LeAT4~ktkfiSCLhvcHBe4IgNCT-jjfKMMcAEASXlLHhc-eOD7YbJwwLACAI49gityQV4C-yQoSEutbe0EjaNlg~npsTcNYFmWFsBc2ZTa2wPgzW5HSh9WCEIFyvstol85hLGxji5rJx6QOJ6V6tICEV~QND-tk-lueumgnAcgLYwKgF5gZOnSDdcOhv0NT63xFnzN4NJubFq5gt5sq15A4XZDLTJ44LZTnu32p3hlmxy7UjIOXaAMDcm~MwkC8rpjGe2h9jYSU3gbl3wVqHVyT2q5KtRXv6TseDZyoQJ7~zsxbU-1XTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "docName":"Dr. R C Sen",
        "speciality":"Cardiologist",
    },
    {
        "docPic":"https://s3-alpha-sig.figma.com/img/cf87/e6ad/24aace7c10aaee67f4ce917334951a07?Expires=1668384000&Signature=IMF0bz-o2Hzi1IfUlMjiRZ-NWmsjQNUKoL7Xdd225H2EeMVNC1fdH~smKWMJkju7mOLevo3-JfSJsFvN-7e6CBOyTevXJQZITrwGurqnlnm2c3TziYfOkt5gAjcXOfwSnJlmsI9LujrKLVbjg4dKmUyEXgbInhoiJ9LMlm8f4H9KECB6Fym0QQThPsOvdUxrpDHWF8iIh905CwOaMiuPYxGU8iZHzie93wUn4YBbrqo68-csKI1HVFsn6ddq2ePr1-YcOu~rS1JLx3X~s4Ky8kJ8GrT8hbur4kvNj67Pa6xkDLGdQ9ZiVacXa3265XSbLJU71fEHR1MLeRPQYqaXRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "docName":"Dr. A Tiwari",
        "speciality":"Pulmunologist",
    },
    {
        "docPic":"https://s3-alpha-sig.figma.com/img/60a7/97f4/5a40f404a706740cf2cf8940032df68c?Expires=1668384000&Signature=NV4XSZOVv4L0E439Eo3Ul21p~vYbfR6CPm5brfAqo5nVRgsrBD0~sChOuaIm7sUCLJO9GnWE4kVu3uVrpFbGXK-Et6PvYs38Pts5wrbwvutcwFMpqOCO4ugsCVmeW5ngWLXYQNYvnXUippcM73DCLD-HJK8ELq-foRQCHBXPwJheXhIlQZklqQAjCCw1gJIKeZr~HNJdTb99SVh4lx7k9fL6e9k2lIpRk7qG5jWSXr8UZ70XmTcOlcLIYuyTTo~UPRjYT-zRXXhq6Q2EqtRJLBJXBIQ7sxAD-SKxUN8vBE~5xw6M5aIePcOBvAQ3yYS3bALWz4mc0cmPnEWoKcGjow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "docName":"Dr. G Minocha",
        "speciality": "Oncologist",
    },
]
const useStyles = makeStyles((theme) => {
    return ({
        paper: {
           padding: "2% 5%",
           borderLeft: "10px solid #33ccff",
           borderRadius: "10px",
            marginBottom: "1%",
        },
        paper2: {
            padding: "1% 5%",
            borderLeft: "10px solid #400CCC",
            borderRadius: "10px",
             marginBottom: "1%",
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
            padding: "0em 15em",
        },
        grid2: {
            padding: "0% 15%",
            fontSize: "20px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "5%",
        },
        grid1: {
            paddingTop: "10%",
            paddingBottom: "5%",
            fontSize: "3vw",
            fontFamily:"Times New Roman",
        },
        form: {
            position: "absolute",
            left: "32vw",
          padding: "2% 5% 0% 0%" ,
          fontWeight: "bold",
        },
        search: {
            position: 'absolute',
            left: '32%',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(3),
              width: 'auto',
            },
            
            borderRadius: '10px',
            marginTop: '1%',
          },
          searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            left: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
    });
});
const PatientAppointDoctor = () => {
    const classes = useStyles();
    const [query, setQuery] = useState("")
  return (
    <>
      <Navbar></Navbar>
      <Grid className={classes.grid1} container justify="center" >
        <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/8b15/e6f1/f05a663a6ac1333274ede5ed28bc2b10?Expires=1668384000&Signature=CGenkQAnhJFP5dTol7UqdZf0ttIjJyOxrCl1UwXP-1xG2OCyuWTz5Ph5-jBrOT-eQOtl7jHi0IIPVFHX0X0aiiYRO8X6rTPOd-iw5vbsyPqgnOzgo4lyR9ulebn7hl3-mtNYtljlEKAALLwdHs49qDeNgJC2ODDgIzXq~nNPBT1t0e1PjngCaIwVp~xH9SLGgwGnX0fjyIxQ~gk1jrWcyz8~K8EGGn235Ontv6thc~T9CBlP-mfYgsc2gLoP90g3QdHkaQ4CVWEd92BuAoQvFwqN-PXY6ZqK60sJUyeDFeng~xtL2DWhv~4Wt9t~nNK-lcy9EZAi1WxfKr8x16EJgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" style={{width:'10vw',height:'10vw',margin:'2% 4% 0% 0%'}}/>
           
           <Paper elevation={0} style={{fontSize:'15px',width:'30vw',lineHeight:'1.8'}}>
              <div style={{fontSize:'25px'}}><b>Ada Smith</b></div>
              <div>Age: 27&emsp;&emsp;Gender: Female</div>
              <div>Blood Group: A+&emsp;&emsp;</div>
              <div>Contact: 999999XXXXX</div>
              <div>EHR #: 13214</div>
            </Paper>
            
        </Grid>
        <Grid className={classes.grid2} container>
            <div style={{marginBottom: "2%"}}>Upcoming Appointments</div>               
            {
                appointments.map((record) => (
                <Paper className={classes.paper} elevation={5}>
                    <Grid>
                        <Typography><b>{record.docName}</b>&emsp;&emsp;&emsp;{record.speciality}&emsp;&emsp;&emsp;&emsp;<b>{record.date}</b>&emsp;&emsp;&emsp;&emsp;<b>{record.time}</b>&emsp;&emsp;&emsp;&emsp;<Button variant="contained" style={{border:"1px solid blue"}}>Join</Button></Typography>
                        
                    </Grid>
                </Paper>
                ))
            }
        </Grid>
        <Grid className={classes.grid2} container>
            <div style={{marginBottom: "2%"}}>Find Doctors</div>  
            <div>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <input placeholder="Search By Name or Specialization" onChange={event => setQuery(event.target.value)} style={{width:'30vw',height:'5vh',borderRadius:'10px'}} />
          </div>
            </div>
            <br /><br /><br />
            <div>
            {
                doctors.filter(post => {
                    if (query === '') {
                    return post;
                    } else if (post.docName.toLowerCase().includes(query.toLowerCase())||post.speciality.toLowerCase().includes(query.toLowerCase())) {
                    return post;
                    }
                }).map((post, index) => (
                    <Paper className={classes.paper2} elevation={5}>
                    <Grid style={{fontSize:'18px',display:"flex",flexDirection:"row"}}>
                    <img alt="Remy Sharp" src={post.docPic} style={{width:'6vw',height:'5vw',marginRight:'5%',borderRadius:'10px'}}/>
                    <Paper elevation={0} style={{marginTop:"2%"}}>{post.docName}&emsp;&emsp;&emsp;&emsp;{post.speciality}<Button variant="contained" style={{border:"1px solid blue",position:"absolute",left:"75%"}}>View</Button>
                    </Paper>
                        
                    </Grid>
                </Paper>
                ))
            }
            
            </div>
            
        </Grid>
    </>
  )
}

export default PatientAppointDoctor
