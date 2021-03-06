/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

import { timeDifference } from '../utils';

const useStyles = makeStyles(theme => ({
  root: {
    height: '96px',
    '@media (min-width:600px)': {
      height: '112px',
    },
    [theme.breakpoints.up('md')]: {
      height: '128px',
    },
    display: 'flex',
    alignItems: 'center',
    // borderBottom: '1px solid rgba(0,0,0,0.3)',
    position: 'relative',
    backgroundColor: 'white',
  },
  logoContainer: {
    height: 96,
    width: 96,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  logo: {
    display: 'block',
    margin: 'auto',

    height: 'auto',
    maxHeight: '100%',

    width: 'auto',
    maxWidth: '100%',
  },
  divider: {
    height: '80%',
  },
  contentContainer: {
    padding: 8,
    flex: 9,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  jobName: {
    fontWeight: '700',
    fontSize: '0.85rem',
    '@media (min-width:600px)': {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
  },
  companyName: {
    fontSize: '0.6rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  },
  tagSection: {
    height: '24px',
    '@media (min-width:600px)': {
      height: '28px',
    },
    [theme.breakpoints.up('md')]: {
      height: '32px',
    },
    display: 'flex',
    paddingBottom: 8,
  },
  tagContainer: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    padding: 2,
    marginRight: 4,
    height: '100%',
  },
  restrictionContainer: {
    border: `1px solid #bb0000`,
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#bb0000',
    padding: 2,
    marginRight: 4,
    height: '100%',
  },
  tagName: {
    fontSize: '0.6rem',
    '@media (min-width:600px)': {
      fontSize: '0.75rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.75rem',
    },
    color: 'white',
    fontWeight: 600,
  },
  applyButton: {
    marginRight: 24,
    height: '40%',
    fontWeight: 'bold',
    width: '15%',
    maxWidth: 150,
  },
  bottomDivider: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  lifetime: {
    marginRight: 12,
    fontWeight: 'bold',
    width: 28,
  },
}));

export default function JobCard(props) {
  const classes = useStyles();
  const router = useRouter();
  const {
    jobName,
    companyName,
    logoURI,
    tags = [],
    preview,
    locationRestriction = null,
    _id,
    createdAt,
  } = props;
  // eslint-disable-next-line consistent-return
  const hasLocationRestriction = () => {
    if (locationRestriction && locationRestriction !== 'Worldwide') {
      return (
        <Box className={classes.restrictionContainer}>
          <Typography className={classes.tagName} variant="caption">
            {locationRestriction}
          </Typography>
        </Box>
      );
    }
  };

  return (
    <Grid
      onClick={() => {
        if (!preview) {
          router.push('/jobs/[id]', `/jobs/${_id}`);
        }
      }}
      item
      xs={12}
      className={`${classes.root} ${props.className}`}
    >
      <Box className={classes.logoContainer}>
        <img
          src={logoURI}
          className={classes.logo}
          alt={`${companyName} Logo`}
        />
      </Box>
      <Divider orientation="vertical" className={classes.divider} />
      <Box className={classes.contentContainer}>
        <Typography className={classes.jobName}>{jobName}</Typography>
        <Typography className={classes.companyName}>{companyName}</Typography>
        <Box className={classes.tagSection}>
          {hasLocationRestriction(locationRestriction)}
          {tags.map(element => (
            <Box key={element} className={classes.tagContainer}>
              <Typography className={classes.tagName} variant="caption">
                {element}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Hidden xsDown>
        <Button
          variant="contained"
          color="secondary"
          className={classes.applyButton}
        >
          Apply
        </Button>
      </Hidden>
      <Box>
        <Typography className={classes.lifetime}>
          {timeDifference(new Date(), new Date(createdAt))}
        </Typography>
      </Box>
      <Divider className={classes.bottomDivider} variant="fullWidth" />
    </Grid>
  );
}
