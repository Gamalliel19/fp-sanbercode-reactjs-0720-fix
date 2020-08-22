import React,{useContext} from 'react';
import {Link as LinkRouter } from "react-router-dom"
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import {UserContext} from '../context/UserContext'
import {DrawerContext} from '../context/DrawerContext'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  logout: {
    color: "#000000"
  },
  signin: {
    color: "#000000"
  }
}));



const HeaderBar = ({path}) => {
  const classes = useStyles();
  const [,users,setUsers,,] = useContext(UserContext);
  const [open, setOpen] = useContext(DrawerContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleSignOut = () => {
    setUsers(null)
    localStorage.removeItem("user")
    alert("You've Been Logged Out")
  }

  const LoginMenu = ({user, ...props}) => {
    return(
        <>{
          user ?
          <Button color="inherit" variant="contained" onClick={handleSignOut} className={classes.logout}>Logout</Button>
          : <Button component={ LinkRouter } to={`${path.url}signin`} color="inherit" variant="contained" className={classes.signin}>Login</Button>
           
          }
        </>
    )
  
  }

  return (
      <AppBar color="secondary" position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Final Project Front End Web Development Sanbercode ReactJS
          </Typography>
          <LoginMenu user={users}/>
        </Toolbar>
      </AppBar>
  );
}

export default HeaderBar