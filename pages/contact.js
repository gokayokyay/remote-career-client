/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

import NavBar from '../src/components/NavBar';

import { getJobs } from '../src/redux/actions';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EDEDED',
  },
  bg: {
    backgroundImage: 'url(../nature-2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    height: `60%`,
    width: '100%',
    zIndex: 0,
    boxShadow: '0px 0px 24px rgb(0, 0, 0)',
  },
  contactSection: {
    flex: 1,
    // display: 'block',
    maxWidth: '100%',
    marginTop: '24%',
    '@media (min-width:600px)': {
      maxWidth: '680px',
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
  inputTitles: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  inputs: {
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    paddingLeft: 8,
    marginTop: 8,
    marginLeft: -4,
  },
  sendButton: {
    fontWeight: 'bold',
    marginTop: 32,
    height: 36,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function Index() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(st => st.getJobs);
  return (
    <Grid container className={classes.root}>
      <NavBar />
      <form className={classes.contactSection}>
        <Typography className={classes.inputTitles} variant="body1">
          Name*
        </Typography>
        <InputBase required className={classes.inputs} fullWidth />
        <Typography className={classes.inputTitles} variant="body1">
          Email Address*
        </Typography>
        <InputBase required className={classes.inputs} fullWidth />
        <Typography className={classes.inputTitles} variant="body1">
          Subject
        </Typography>
        <InputBase className={classes.inputs} fullWidth />
        <Typography className={classes.inputTitles} variant="body1">
          Message*
        </Typography>
        <InputBase
          rows="6"
          multiline
          required
          className={classes.inputs}
          fullWidth
        />
        <div className={classes.buttonContainer}>
          <InputBase
            color="secondary"
            // variant="contained"
            inputComponent={Button}
            inputProps={{
              className: classes.sendButton,
              color: 'secondary',
              variant: 'contained',
              children: 'Send',
            }}
            type="submit"
          >
            Send
          </InputBase>
        </div>
      </form>
      <div className={classes.bg} />
    </Grid>
  );
}

export default Index;
