import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import JobCard from './JobCard';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '50%',
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
  const state = useSelector(store => store.previewJob);
  return (
    <Box className={classes.root}>
      <img src="./nature-1.jpg" className={classes.bg} alt="Nature" />
      <JobCard
        preview
        jobName={state.position || 'Position'}
        companyName={state.companyName || 'Company'}
        tags={state.tags || ['Tag 1', 'Tag 2']}
        className={classes.jobCard}
        logoURI={state.logoURL}
        locationRestriction={
          state.locationRestriction !== 'Worldwide'
            ? state.locationRestriction
            : null
        }
      />
    </Box>
  );
}
