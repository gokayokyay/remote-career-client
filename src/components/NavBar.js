/* eslint-disable react/prop-types */
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Link from '../Link';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  buttons: {
    marginLeft: 8,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: theme.spacing(18),
  },
  logo: {
    height: '100%',
    width: '100%',
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { position, className, rootStyle } = props;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      color="primary"
      position={position || 'static'}
      className={className}
      style={rootStyle}
    >
      <Toolbar>
        <Link href="/">
          <div className={classes.logoContainer}>
            <img className={classes.logo} src="/logo.png" alt="Logo" />
          </div>
        </Link>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Button color="secondary" className={classes.buttons}>
            Contact
          </Button>
          <Button color="secondary" className={classes.buttons}>
            Proofs
          </Button>
          <Link href="/postjob">
            <Button
              color="secondary"
              className={classes.buttons}
              variant="contained"
            >
              Post a Job
            </Button>
          </Link>
        </div>
        <div className={classes.sectionMobile}>
          <Button onClick={handleClick}>Menu</Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Post A Job</MenuItem>
            <MenuItem onClick={handleClose}>Proof</MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
