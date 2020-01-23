/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    // display: 'block',
    maxWidth: '100%',
    marginTop: '24%',
    '@media (min-width:600px)': {
      maxWidth: '80%',
      marginTop: '12%',
    },
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: 25,
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    padding: 24,
    height: 'auto',
  },
  logoContainer: {
    height: '25vh',
    maxWidth: '100%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    height: 'auto',
    maxHeight: '100%',

    width: 'auto',
    maxWidth: '100%',
  },
  bigTitle: {
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'center',
  },
  smallTitle: {
    fontWeight: 'bold',
    marginTop: 24,
  },
  body1: {
    marginTop: 12,
  },
  applyButton: {
    fontWeight: 'bold',
    margin: 'auto',
    marginTop: 24,
    display: 'inherit',
    maxWidth: 150,
    minWidth: 100,
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
  tagSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
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
}));

export default function JobPost(props) {
  const classes = useStyles();
  const { job } = props;
  const textFields = [
    'position',
    'companyHeadquarters',
    'description',
    'requirements',
    'niceToHave',
    'responsibilities',
  ];
  const beautifiedTextFields = {
    position: 'Position',
    companyHeadquarters: 'Company Headquarters',
    description: 'Job Description',
    requirements: 'Requirements',
    responsibilities: 'Responsibilities',
    niceToHave: 'Nice To Have',
  };
  function returnTitleAndCaption(property) {
    if (job[property] === null || job[property] === '') {
      return;
    }
    if (job.hasOwnProperty(property)) {
      return (
        <React.Fragment key={property}>
          <Typography variant="h6" className={classes.smallTitle}>
            {beautifiedTextFields[property]}
          </Typography>
          <Typography
            style={{ whiteSpace: 'pre-line' }}
            variant="body1"
            className={classes.body1}
          >
            {job[property]}
          </Typography>
        </React.Fragment>
      );
    }
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.logoContainer}>
        <img
          src={job.companyLogo}
          className={classes.logo}
          alt={`${job.companyName} Logo`}
        />
      </Box>
      <Typography variant="h4" className={classes.bigTitle}>
        {job.companyName}
      </Typography>
      <Typography variant="body1" style={{ textAlign: 'center', marginTop: 8 }}>
        {new Date(job.createdAt).toDateString()}
      </Typography>
      {job.locationRestriction !== 'Worldwide' ? (
        <Box className={classes.tagSection}>
          <Box className={classes.restrictionContainer}>
            <Typography className={classes.tagName}>
              {job.locationRestriction}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box className={classes.tagSection}>
          <Box className={classes.tagContainer}>
            <Typography className={classes.tagName}>Worldwide</Typography>
          </Box>
        </Box>
      )}
      <Box className={classes.tagSection}>
        {job.tags.map(tag => {
          return (
            <Box key={tag} className={classes.tagContainer}>
              <Typography className={classes.tagName}>{tag}</Typography>
            </Box>
          );
        })}
      </Box>
      {textFields.map(returnTitleAndCaption)}
      <Tooltip title={job.applyLink}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.applyButton}
          onClick={() => {
            if (job.applyLink.includes('@')) {
              location.href = `mailto:${job.applyLink}`;
            } else {
              location.href = `${job.applyLink}`;
            }
          }}
        >
          Apply
        </Button>
      </Tooltip>
    </Box>
  );
}
