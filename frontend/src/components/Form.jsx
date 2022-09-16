import {React,useState} from 'react'
import {  Typography,TextField,Paper, makeStyles } from '@material-ui/core';
import useWindowDimensions from '../Hooks/useWindowDimensions';


const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      padding: '10px',
      height: "70%",
      width: "50%",
      elevation :20,
      justifyContent: "center"
    },
  }));

function Form() {
  const [name,setName] = useState("Type your name");
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const handleName = (e)=>{
    setName(e);
  }
  return (
    <div style={{width: width,height: height,backgroundColor:"blue",display: "flex",justifyContent:"center",alignItems:"center"}}>
    <Paper className = {classes.paper}>
    <TextField
          id="outlined-required"
          label="Name"
          value = {name}
          onChange = {e => handleName(e.target.value)}
        />
        <Typography>
            {name}
        </Typography>
    </Paper>
    </div>
    
  )
}

export default Form