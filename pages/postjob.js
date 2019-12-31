import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Link from '../src/Link';
import NavBar from '../src/components/NavBar';
import CreateJobSection from '../src/components/CreateJobSection';
import JobPreviewSection from '../src/components/JobPreviewSection';

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
        <Button variant="contained" color="secondary" className={classes.confirmButton}>
          Confirm
        </Button>
        <a style={{float: 'right', color: 'white', fontSize: 12, textDecoration: 'none'}} href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>
      </Box>
    </Grid>
  );
}
