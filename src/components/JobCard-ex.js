/* eslint-disable react/prop-types */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: 256,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 256,
    width: 200,
  },
  logo: {
    height: 'auto',
    width: '196px',
  },
  divider: {
    height: 225,
  },
  contentContainer: {
    height: '100%',
    flex: 1,
    margin: 12,
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 8,
    height: 36,
  },
  jobName: {
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.7)',
    height: 30,
  },
  tagSection: {
    height: 32,
    display: 'flex',
    // width: '100%',
  },
  descriptionContainer: {
    height: 136,
  }
}));

export default function JobCard(props) {
  const classes = useStyles();
  const { jobName, companyName, jobDescription, logoURI } = props;
  return (
    <Grid item xs={12} className={classes.root} zeroMinWidth wrap="nowrap">
      <Box className={classes.logoContainer}>
        <img src={logoURI} className={classes.logo} />
      </Box>
      <Divider orientation="vertical" className={classes.divider} />
      <Box className={classes.contentContainer}>
        <Typography className={classes.companyName}>
          {companyName}
        </Typography>
        <Typography noWrap className={classes.jobName}>
          {jobName}
        </Typography>
        <Box className={classes.tagSection}>

        </Box>
        <Box className={classes.descriptionContainer}>

        </Box>
      </Box>
    </Grid>
  );
}
