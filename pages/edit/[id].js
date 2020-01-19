/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import NavBar from '../../src/components/NavBar';
import EditJobPost from '../../src/components/EditJobPost';
import AuthScreen from '../../src/components/JobAuthScreen';
import { API_ENDPOINT } from '../../src/config';

const useStyles = makeStyles({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  bg: {
    backgroundImage: 'url(../nature-1.jpg)',
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

export default function Index(props) {
  const classes = useStyles();
  const { job } = props;
  const checkKeyState = useSelector(st => st.editJobCheckKey);
  return checkKeyState.success ? (
    <Grid className={classes.root} container>
      <NavBar />
      <EditJobPost job={job} />
    </Grid>
  ) : (
    <AuthScreen />
  );
}

Index.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`${API_ENDPOINT}/jobs/${id}`);
  const data = await res.json();
  return {
    job: data,
  };
};
