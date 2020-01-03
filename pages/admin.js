/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { useDispatch } from 'react-redux';

import { postJob } from '../src/redux/actions';
import JobPost from '../src/components/JobPost';

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  jobSection: {
    backgroundColor: '#303030',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Admin(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { reviewjobs } = props;

  useEffect(() => {
    dispatch(
      postJob({
        // applyLink: 'http',
        companyLogo: '12334',
        companyName: 'test',
        description: 'A jobbbb',
        locationRestriction: 'EU Only',
        position: 'Software Engineer',
        tags: ['Hey', 'you'],
      }),
    );
  }, []);
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Button color="secondary" variant="contained">
          CONFIRM
        </Button>
        <List>
          {reviewjobs.map(obj => {
            return (
              <ListItem button key={obj._id}>
                <ListItemText primary={obj.position} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <div className={classes.jobSection}>
        <JobPost />
      </div>
    </div>
  );
}

Admin.getInitialProps = async () => {
  const res = await fetch(
    'https://pacific-dawn-86567.herokuapp.com/reviewjobs',
  );
  const data = await res.json();
  console.log(data);
  return {
    reviewjobs: data,
  };
};

export default Admin;
