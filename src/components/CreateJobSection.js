/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch, useStore, useSelector } from 'react-redux';

import {
  previewChangedPosition,
  previewChangedCompanyName,
  previewChangedLogo,
  previewChangedLocationRestriction,
  previewChangedTags,
} from '../redux/actions';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(14),
    backgroundColor: theme.palette.primary.main,
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
  dividers: {
    marginTop: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButton: {
    fontWeight: 'bold',
    marginTop: 32,
    '@media (max-width:948px)': {
      display: 'none',
    },
  },
  uploadButton: {
    fontWeight: 'bold',
  },
}));

export default function CreateJobSection() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state.previewJob);
  return (
    <Container className={classes.root}>
      <Typography className={classes.inputTitles} variant="body1">
        Position*
      </Typography>
      <InputBase
        onChange={e => {
          dispatch(previewChangedPosition(e.target.value));
        }}
        required
        className={classes.inputs}
        fullWidth
      />
      <Typography className={classes.inputCaptions} variant="caption">
        Only enter the position, like “Software Architect” or “Product Manager”.
        Please be specific and do not enter any sentence. Do not enter multiple
        positions.
      </Typography>
      <Typography className={classes.inputTitles} variant="body1">
        Company Name*
      </Typography>
      <InputBase
        onChange={e => {
          dispatch(previewChangedCompanyName(e.target.value));
        }}
        required
        className={classes.inputs}
        fullWidth
      />
      <Typography className={classes.inputTitles} variant="body1">
        Company Logo*
      </Typography>
      <input
        accept="image/*"
        className={classes.input}
        style={{ display: 'none' }}
        id="button-file"
        multiple
        type="file"
        onChange={e => {
          // dispatch(previewChangedLogo(URL.createObjectURL(.target.files[0])))
          dispatch(previewChangedLogo(e.target.files[0]));
        }}
      />
      <label htmlFor="button-file">
        <Button
          color="secondary"
          variant="contained"
          component="span"
          className={classes.uploadButton}
        >
          Upload
        </Button>
      </label>
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
        onChange={e => {
          dispatch(previewChangedLocationRestriction(e.target.value));
        }}
      />
      <Typography className={classes.inputCaptions} variant="caption">
        Fill this space if this job has a location restriction, like EU Only, US
        Only. If not leave it unchanged.
      </Typography>
      <Typography className={classes.inputTitles} variant="body1">
        Tags*
      </Typography>
      <InputBase
        required
        className={classes.inputs}
        fullWidth
        onChange={e => {
          const tags = e.target.value.split(',');
          dispatch(previewChangedTags(tags));
        }}
      />
      <Typography className={classes.inputCaptions} variant="caption">
        Comma seperated tags. Please keep in mind that these tags are very
        important for applicants.
      </Typography>
      <Typography className={classes.inputTitles} variant="body1">
        Job Description*
      </Typography>
      <InputBase
        required
        className={classes.inputs}
        fullWidth
        multiline
        rows="4"
      />
      <Typography className={classes.inputTitles} variant="body1">
        Responsibilities
      </Typography>
      <InputBase className={classes.inputs} fullWidth multiline rows="4" />
      <Typography className={classes.inputTitles} variant="body1">
        Requirements
      </Typography>
      <InputBase className={classes.inputs} fullWidth multiline rows="4" />
      <Typography className={classes.inputTitles} variant="body1">
        Nice to have
      </Typography>
      <InputBase className={classes.inputs} fullWidth multiline rows="4" />
      <Typography className={classes.inputTitles} variant="body1">
        Apply URL or Apply Email*
      </Typography>
      <InputBase required className={classes.inputs} fullWidth />
      <Typography className={classes.inputCaptions} variant="caption">
        You can supply the email or the url. Note that this email will be
        public.
      </Typography>
      <Divider variant="fullWidth" className={classes.dividers} />
      <Typography className={classes.inputTitles} variant="body1">
        Payments
      </Typography>
      <Typography className={classes.inputCaptions} variant="caption">
        Payments are disabled at the moment.
      </Typography>
      <Container className={classes.buttonContainer}>
        <Button
          color="secondary"
          variant="contained"
          className={classes.confirmButton}
        >
          Confirm
        </Button>
      </Container>
    </Container>
  );
}
