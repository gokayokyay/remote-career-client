import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    flex: 1,
    // display: 'block',
    maxWidth: '100%',
    marginTop: '24%',
    '@media (min-width:600px)': {
      maxWidth: '80%',
      marginTop: '12%',
    },
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: 25,
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    padding: 24,
    height: 'auto',
  },
  logoContainer: {
    height: '25vh',
    maxWidth: '100%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    height: 'auto',
    maxHeight: '100%',

    width: 'auto',
    maxWidth: '100%',
  },
  bigTitle: {
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'center',
  },
  smallTitle: {
    fontWeight: 'bold',
    marginTop: 24,
  },
  body1: {
    marginTop: 12,
  },
  applyButton: {
    fontWeight: 'bold',
    margin: 'auto',
    marginTop: 24,
    display: 'inherit',
    maxWidth: 150,
    width: '15%',
  },
});

export default function JobPost() {
  const classes = useStyles();

  function returnTitleAndCaption() {
    return (
      <>
        <Typography variant="h6" className={classes.smallTitle}>
          Position
        </Typography>
        <Typography variant="body1" className={classes.body1}>
          Job position stuff blablabla
        </Typography>
      </>
    );
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.logoContainer}>
        <img src="../wwf.png" className={classes.logo} alt={`${''} Logo`} />
      </Box>
      <Typography variant="h4" className={classes.bigTitle}>
        Company Name
      </Typography>
      {returnTitleAndCaption()}
      <Button
        variant="contained"
        color="secondary"
        className={classes.applyButton}
      >
        Apply
      </Button>
    </Box>
  );
}
