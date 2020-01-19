import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    height: 32,
    backgroundColor: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.75)',
    margin: 'auto',
    position: 'fixed',
    bottom: 0,
    left: 'calc(50% - 100px)',
  },
  text: {
    color: 'white',
    fontSize: '0.8rem',
  },
  icon: {
    marginLeft: 4,
    color: 'red',
    fontSize: '1rem',
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.text}>Made with</Typography>
      <FavoriteIcon className={classes.icon} />
    </Box>
  );
}

export default Footer;
