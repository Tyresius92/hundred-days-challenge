import React from 'react';
import ExtraPropTypes from 'react-extra-prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  appBar: {
    marginTop: '20px',
    top: 'auto',
    bottom: 0,
  },
  madeWithLove: {
    flexGrow: 1,
  },
});

const NavBar = ({ color }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="sticky"
      className={classes.appBar}
      style={{ backgroundColor: color }}
    >
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

NavBar.propTypes = {
  color: ExtraPropTypes.color.isRequired,
};

export default NavBar;
