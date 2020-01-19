import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import NavBar from '../src/components/NavBar';
import CreateJobSection from '../src/components/CreateJobSection';
import JobPreviewSection from '../src/components/JobPreviewSection';

import { postJob, postJobErrorAcked } from '../src/redux/actions';

const useStyles = makeStyles(theme => ({
  confirmContainer: {
    height: theme.spacing(12),
    width: '100vw',
    position: 'fixed',
    backgroundColor: '#333',
    bottom: 0,
    padding: '8px 40px 8px 40px',
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 24,
    // float: 'right',
  },
  confirmButton: {
    fontWeight: 'bold',
    // float: 'right',
  },
}));

export default function Index() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(st => st.previewJob);
  const errorState = useSelector(st => st.postJob);
  const router = useRouter();
  const handleClose = () => {
    dispatch(postJobErrorAcked());
  };
  const handleSuccessClose = () => {
    router.push('/');
  };
  return (
    <Grid container>
      <NavBar position="fixed" />
      <Grid item xs={12} sm={12} md={6}>
        <CreateJobSection />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <JobPreviewSection />
      </Grid>
      <Box className={classes.confirmContainer}>
        <Typography className={classes.priceText} color="primary">
          Price: FREE!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.confirmButton}
          onClick={e => {
            dispatch(postJob(state));
          }}
        >
          Confirm
        </Button>
        <a
          style={{
            float: 'right',
            color: 'white',
            fontSize: 12,
            textDecoration: 'none',
          }}
          href="https://www.freepik.com/free-photos-vectors/background"
        >
          Background vector created by freepik - www.freepik.com
        </a>
      </Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={errorState.error !== false}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Apply Error
        </DialogTitle>
        <DialogContent dividers>
          <Typography style={{ whiteSpace: 'pre-line' }} gutterBottom>
            {errorState.error}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="error">
            OKAY
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={errorState.success === true}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Success!
        </DialogTitle>
        <DialogContent dividers>
          <Typography style={{ whiteSpace: 'pre-line' }} gutterBottom>
            Your job will be reviewed before going live. You will be informed
            when it is ready.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSuccessClose} color="success">
            OKAY
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
