import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, Table, TableBody, TableRow, TableCell, CardActionArea, Card, CardContent, Hidden, CardMedia } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    width:"60%",
    margin:"auto"
  },
  fixedHeight: {
    height: 240,
  },
  card : {
    display: 'flex',
    height : 240
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width:160
  },
}));

const aboutData = [
  {no: 1, field:"Nama",value:"Gamalliel Sharon"}
  ,{no: 2,field:"Email",value:"sharongamalliel@gmail.com"}
  ,{no: 3,field:"Sistem Operasi yang digunakan",value:"Mac OS"}
  ,{no: 4,field:"Akun Github",value:"https://github.com/Gamalliel19"}
  ,{no: 5,field:"Akun Telegram",value:"gmllshrn"}
]

const About = () => {
  return(
    <>
    <Typography color="secondary" variant="h5" component="h5">Welcome To My Final Projects!</Typography>
    <Typography variant="h5" component="h5" color="secondary" >Data Peserta Sanbercode Bootcamp Reactjs</Typography>
    <Table>
      <TableBody>
        {
          aboutData.sort((a,b) => parseInt(a.rating) - parseInt(b.rating)).map((el,index)=>{
            return(
              <TableRow>
              <TableCell>{el.field}</TableCell>
              <TableCell>:</TableCell>
              <TableCell>{el.value}</TableCell>
            </TableRow>
            )
          })
        }
        
      </TableBody>
    </Table>
    </>
  )
}

const Home = () => {

  const classes = useStyles();
  
  
  return (

<Grid container spacing={3}>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
         <About/>
          </Paper>
      </Grid>
</Grid>


          
  );
}

export default Home