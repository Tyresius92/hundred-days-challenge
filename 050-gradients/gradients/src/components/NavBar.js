import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  appBar: {
    marginTop: '20px',
    top: 'auto',
    bottom: 0,
  },
  madeWithLove: {
    flexGrow: 1,
  },
}));

const NavBar = props => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.madeWithLove}>
          Made with love by Tyrel
        </Typography>
        <IconButton
          color="inherit"
          href="https://github.com/Tyresius92/hundred-days-challenge/050-gradients/gradients"
        >
          <GitHubIcon color="inherit" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
