import React,{useContext} from 'react';
import {Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MovieIcon from '@material-ui/icons/Movie';
import GamesIcon from '@material-ui/icons/Games';
import KeyIcon from '@material-ui/icons/VpnKey';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {UserContext} from '../context/UserContext'
import {DrawerContext} from '../context/DrawerContext'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));



const SideBar= ({path}) => {
  const classes = useStyles();
  const [,users,,,] = useContext(UserContext);
  const [open,setOpen] = React.useContext(DrawerContext);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const MainListItems = () =>{
      return(
          <div>
            <ListItem button component={Link} to={`${path.url}`}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to={`${path.url}Movies`}>
              <ListItemIcon>
                <MovieIcon />
              </ListItemIcon>
              <ListItemText primary="Movies" />
            </ListItem>
            <ListItem button component={Link} to={`${path.url}Games`}>
              <ListItemIcon>
                <GamesIcon />
              </ListItemIcon>
              <ListItemText primary="Games" />
            </ListItem>
            </div>
        );
  } 

  const SecondaryListItems = () => {
      return(
          <div>
            <ListSubheader inset>Administrator</ListSubheader>
            <ListItem button component={Link} to={`${path.url}movies-list`}>
              <ListItemIcon>
                <MovieIcon />
              </ListItemIcon>
              <ListItemText primary="Movie Editor" />
            </ListItem>
            <ListItem button component={Link} to={`${path.url}games-list`}>
              <ListItemIcon>
                <GamesIcon />
              </ListItemIcon>
              <ListItemText primary="Game Editor" />
            </ListItem>
            <ListItem button component={Link} to={`${path.url}change-password`} >
              <ListItemIcon>
                <KeyIcon />
              </ListItemIcon>
              <ListItemText primary="Change Password" />
            </ListItem>
          </div>
        );
  } 



  return (
    <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        {
          
          users ? <> <AccountCircleIcon style={{marginRight:10}}/> {users.username}</> : null  
        } 
          <IconButton onClick={handleDrawerClose} style={{marginLeft:30}}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List><MainListItems/></List>
        {
          
          users ? <><Divider /><List><SecondaryListItems/></List></> : null  
        }
        
      </Drawer>
      
  );
}

export default SideBar