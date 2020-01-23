/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';

import {
  getReviewJobs,
  selectedReviewJob,
  confirmReviewJob,
} from '../src/redux/actions';
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

function Admin() {
  const classes = useStyles();
  const keyState = useSelector(st => st.admin);
  const reviewJobsState = useSelector(st => st.reviewJobs);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!keyState.key || !keyState.success) {
      router.replace('/auth');
    } else {
      dispatch(getReviewJobs(keyState.key));
    }
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
        <Button color="default" variant="contained">
          DECLINE
        </Button>
        <Button
          onClick={() => {
            dispatch(
              confirmReviewJob(
                reviewJobsState.reviewJobs[reviewJobsState.selected]._id,
                keyState.key,
              ),
            );
          }}
          color="secondary"
          variant="contained"
        >
          CONFIRM
        </Button>
        <List>
          {reviewJobsState.reviewJobs
            ? reviewJobsState.reviewJobs.map((obj, index) => {
                return (
                  <ListItem
                    onClick={() => {
                      dispatch(selectedReviewJob(index));
                    }}
                    button
                    key={obj._id}
                  >
                    <ListItemText primary={obj.position} />
                  </ListItem>
                );
              })
            : null}
        </List>
      </Drawer>
      <div className={classes.jobSection}>
        {typeof reviewJobsState.reviewJobs !== 'undefined' && reviewJobsState.reviewJobs.length > 0 ? (
          <JobPost job={reviewJobsState.reviewJobs[reviewJobsState.selected]} />
        ) : null}
      </div>
    </div>
  );
}

export default Admin;
