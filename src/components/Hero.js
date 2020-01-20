/* eslint-disable no-prototype-builtins */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

import Link from '../Link';

const useStyles = makeStyles({
  root: {
    height: '40vh',
  },
  image: {
    backgroundImage: 'url(./lion-overlay.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  content: {
    display: 'flex',
    height: '80%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    letterSpacing: '-0.025em',
    // backgroundColor: 'red'
  },
  infoText: {
    fontWeight: 'bold',
    color: 'white',
  },
  donationText: {
    fontWeight: '500',
    color: 'white',
    marginTop: 8,
    fontSize: 14,
  },
  buttonArea: {
    display: 'flex',
    alignItems: 'center',
    // flexDirection: 'column',
    marginTop: 16,
  },
  postJobButton: {
    textTransform: 'none',
    fontWeight: 700,
    marginRight: 12,
  },
  jobCount: {
    marginLeft: 12,
    color: 'white',
    fontSize: 14,
  },
});

export default function Hero() {
  const classes = useStyles();
  const state = useSelector(st => st.getJobs);
  const jobCount = state.hasOwnProperty('todayJobs')
    ? state.todayJobs.length +
      state.pastWeekJobs.length +
      state.pastMonthJobs.length +
      state.olderJobs.length
    : 0;
  return (
    <Grid container className={classes.root}>
      <Grid xs={12} item className={classes.image}>
        <div className={classes.content}>
          <Typography variant="h5" className={classes.infoText}>
            The only way to help save the world,
          </Typography>
          <Typography variant="h5" className={classes.infoText}>
            while posting a job
          </Typography>
          <Typography variant="caption" className={classes.donationText}>
            90% of every purchase goes to a charity!
          </Typography>
          <div className={classes.buttonArea}>
            <Link href="/postjob">
              <Button
                color="secondary"
                variant="contained"
                className={classes.postJobButton}
              >
                POST A JOB
              </Button>
            </Link>
            <Typography variant="caption" className={classes.jobCount}>
              <b>{jobCount}</b> jobs and still counting!
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
