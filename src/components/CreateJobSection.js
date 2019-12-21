// /* eslint-disable prettier/prettier */
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 16,
  },
  inputTitles: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  inputs: {
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    paddingLeft: 8,
    marginTop: 8,
    marginLeft: -4,
  },
  inputCaptions: {
    marginTop: 8,
  },
}));

export default function CreateJobSection() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography className={classes.inputTitles} variant="body1">
        Position*
      </Typography>
      <InputBase required className={classes.inputs} fullWidth />
      <Typography className={classes.inputCaptions} variant="caption">
        Only enter the position, like “Software Architect” or “Product Manager”.
        Please be specific and do not enter any sentence. Do not enter multiple
        positions.
      </Typography>
      
      <Typography className={classes.inputTitles} variant="body1">
        Company Name*
      </Typography>
      <InputBase required className={classes.inputs} fullWidth />

      <Typography className={classes.inputTitles} variant="body1">
        Company Headquarters
      </Typography>
      <InputBase className={classes.inputs} fullWidth />

      <Typography className={classes.inputTitles} variant="body1">
        Location Restriction
      </Typography>
      <InputBase
        defaultValue="Worldwide"
        required
        className={classes.inputs}
        fullWidth
      />
      <Typography className={classes.inputCaptions} variant="caption">
        Fill this space if this job has a location restriction, like EU Only, US
        Only. If not leave it unchanged.
      </Typography>

      <Typography className={classes.inputTitles} variant="body1">
        Tags*
      </Typography>
      <InputBase required className={classes.inputs} fullWidth />
      <Typography className={classes.inputCaptions} variant="caption">
        Comma seperated tags. Please keep in mind that these tags are very
        important for applicants.
      </Typography>

    </Container>
  );
}
