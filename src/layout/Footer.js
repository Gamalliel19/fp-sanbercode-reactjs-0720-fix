import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const Footer= () =>{
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Made By '}
        <Link color="inherit" href="https://gamalliel19.github.io/Gamalliel-Portfolio/">
          Gamalliel Sharon
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
export default Footer