import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    Link,
    MenuItem,Badge,IconButton,Paper
  } from "@material-ui/core";
  import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@material-ui/core";
  import {
    CheckBoxOutlineBlankOutlined,
    DraftsOutlined,
    HomeOutlined,
    InboxOutlined,
    MailOutline,
    ReceiptOutlined,
  } from "@material-ui/icons";
  import MenuIcon from "@material-ui/icons/Menu";
  import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@mui/material";
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
  
  const headersData = [
    {
      label: "Dashboard",
      href: "/Dashboard",
    },
    {
      label: "Edit Profile",
      href: "/EditProfile",
    },
    {
      label: "EHR",
      href: "/EHR",
    },
    {
      label: "Sign Out",
      href: "/SignOut",
    },
  ];
  const notifications = [
    {
      "name":"Dr. R C Sen",
      "request":"Requesting to access EHR",
    }
  ];
  
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#400CCC",
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
  }));
  
  export default function Navbar() {
    const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: 250,padding:"2%"}} onClick={() => setOpen(false)}>
      <div style={{fontWeight:"bold",textAlign:"center"}}>Notifications</div>
      {notifications.map((item) => (
       <Paper style={{padding:"5%"}}>
          <div>{item.name}</div>
          <div>{item.request}</div>
          <div>
          <Button variant="contained"  style={{width:"50px",height:"30px",backgroundColor:"green",margin:"2% 5% 0% 0%",fontSize:"12px"}}>Accept</Button>
          <Button variant="contained" style={{width:"50px",height:"30px",backgroundColor:"red",margin:"2% 5% 0% 0%",fontSize:"12px"}}>Decline</Button>
          </div>
       </Paper>
      ))}
    </div>
  );
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      };
    }, []);
  
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
            
          {femmecubatorLogo}
          <div>{getMenuButtons()}</div>
          <IconButton onClick={() => setOpen(true)} aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={notifications.length} color="secondary">
                <NotificationsIcon />
                
              </Badge>
            </IconButton>
            <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
                  {getList()}
                </Drawer>
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
  
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
  
          <div>{femmecubatorLogo}</div>
        </Toolbar>
      );
    };
  
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    };
  
    const femmecubatorLogo = (
        <>
        <Typography variant="h6" component="h1" className={logo}>
            
            <img src="https://cdn-icons-png.flaticon.com/512/4865/4865500.png" style={{height:'30px'}}/>
        CloudHealth
      </Typography>
        </>
      
    );
  
    const getMenuButtons = () => {
      return (
        headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      })
      );
    };
  
    return (
      <header>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
  }