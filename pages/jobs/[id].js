/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import NavBar from '../../src/components/NavBar';
import JobPost from '../../src/components/JobPost';
import { API_ENDPOINT } from '../../src/config';

const useStyles = makeStyles({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EDEDED',
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
  return (
    <Grid className={classes.root} container>
      <Head>
        <title>Job - {job.position}</title>
      </Head>
      <NavBar />
      <JobPost job={job} />
      <div className={classes.bg} />
    </Grid>
  );
}

Index.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`${API_ENDPOINT}/jobs/${id}`);
  const data = await res.json();
  // console.log(data);
  return {
    job: data,
  };
};
