import {React,useState} from 'react'
import {Paper,makeStyles,TextField} from '@material-ui/core';
import useWindowDimensions from '../Hooks/useWindowDimensions'

const useStyles = makeStyles((theme) => ({
    paper : {
        display: "flex",
        height: "70%",
        width: "50%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    subpaper : {
        display: "flex",
        height: "50%",
        width: "100%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    }
  }));

function RegForm() {
 const classes = useStyles();
  const {height,width} = useWindowDimensions();
  const [username,setUsername] = useState("Type your name!");
  const handleUsername = (e) => {
    setUsername(e);
  }
  return (
    <div style={{height:height,width:width,backgroundColor:"blue",display:"flex",justifyContent: "center",alignItems: "center"}}>
        <Paper className={classes.paper}>
            <Paper className = {classes.subpaper}>
                {username}
            </Paper>
            <Paper className = {classes.subpaper}>
            <TextField 
            id="outlined-basic" 
            label="Username" 
            value = {username} 
            onChange = {(e)=>{handleUsername(e.target.value)}}/>
            </Paper>
        </Paper>
    </div>
  )
}

export default RegForm