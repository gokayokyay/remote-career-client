import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from '../src/components/NavBar';
import JobPost from '../src/components/JobPost';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EDEDED',
  },
  bg: {
    backgroundImage: 'url(./nature-1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    height: '60%',
    width: '100%',
    zIndex: 0,
    boxShadow: '0px 0px 24px rgb(0, 0, 0)',
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <NavBar />
      <JobPost />
      <div className={classes.bg} />
    </Grid>
  );
}
