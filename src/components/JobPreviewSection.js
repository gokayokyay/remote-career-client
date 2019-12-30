import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import JobCard from './JobCard';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '41.666667%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: '#000',
    padding: 40,
    '@media (max-width:948px)': {
      // height: '112px',
      position: 'relative',
      width: '100%',
      height: 480,
    },
  },
  jobCard: {
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    width: '67%',
  },
  bg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    zIndex: -2,
    '@media (max-width:948px)': {
      zIndex: 0,
    },
    opacity: 0.8,
  },
});

export default function JobPreviewSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img src="./nature-1.jpg" className={classes.bg} alt="Nature" />
      <JobCard preview jobName="Position" companyName="Company Name" tags={['Tag 1', 'Tag 2']} className={classes.jobCard} />
    </Box>
  );
}
