/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import {
  editJobChangedPosition,
  editJobChangedCompanyName,
  editJobChangedLogo,
  editJobChangedLocationRestriction,
  editJobChangedTags,
  editJobChangedDescription,
  editJobChangedResponsibilities,
  editJobChangedRequirements,
  editJobChangedNiceToHave,
  editJobChangedApplyLink,
  editJobChangedCompanyHQ,
  editJobChangedLogoSuccess,
  postEditedJob,
} from '../redux/actions';

const useStyles = makeStyles({
  root: {
    width: '100%',
    '@media (min-width:600px)': {
      width: '60%',
    },
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
  errorCaptions: {
    color: 'red',
    marginTop: 8,
    display: 'inline-block',
  },
  dividers: {
    marginTop: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  confirmButton: {
    fontWeight: 'bold',
    marginTop: 32,
  },
  uploadButton: {
    fontWeight: 'bold',
  },
  logo: {
    height: 'auto',
    maxHeight: '200px',

    width: 'auto',
    maxWidth: '200px',
    display: 'block',
    margin: '12px 0 12px 0',
  },
});

function EditJobPost(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(st => st.editJob);
  const errorState = useSelector(st => st.postJob);
  const keyState = useSelector(st => st.editJobCheckKey);
  // console.log(keyState);
  // console.log(errorState);
  const { job } = props;

  React.useEffect(() => {
    dispatch(editJobChangedPosition(job.position));
    dispatch(editJobChangedDescription(job.description));
    dispatch(editJobChangedCompanyName(job.companyName));
    if (job.hasOwnProperty('companyHeadquarters')) {
      dispatch(editJobChangedCompanyHQ(job.companyHeadquarters));
    }
    dispatch(editJobChangedLocationRestriction(job.locationRestriction));
    dispatch(editJobChangedLogoSuccess(job.companyLogo));
    dispatch(editJobChangedTags(job.tags));
    if (job.hasOwnProperty('requirements')) {
      dispatch(editJobChangedRequirements(job.requirements));
    }
    if (job.hasOwnProperty('niceToHave')) {
      dispatch(editJobChangedRequirements(job.niceToHave));
    }
    if (job.hasOwnProperty('responsibilities')) {
      dispatch(editJobChangedRequirements(job.responsibilities));
    }
    dispatch(editJobChangedApplyLink(job.applyLink));
  }, []);
  console.log(state);
  console.log(keyState);
  return (
    <div className={classes.root}>
      <Typography className={classes.inputTitles} variant="body1">
        Position*
      </Typography>
      <InputBase
        onChange={e => {
          dispatch(editJobChangedPosition(e.target.value));
        }}
        required
        className={classes.inputs}
        fullWidth
        defaultValue={job.position}
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
          dispatch(editJobChangedCompanyName(e.target.value));
        }}
        required
        className={classes.inputs}
        fullWidth
        defaultValue={job.companyName}
      />
      <Typography className={classes.inputTitles} variant="body1">
        Company Logo*
      </Typography>
      <img
        className={classes.logo}
        src={state.logoURL}
        alt={`${job.companyName} Logo`}
      />
      <input
        accept="image/*"
        className={classes.input}
        style={{ display: 'none' }}
        id="button-file"
        type="file"
        onChange={async e => {
          dispatch(editJobChangedLogo(e.target.files[0]));
        }}
        // defaultValue={job.companyLogo}
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
      <InputBase
        onChange={e => {
          dispatch(editJobChangedCompanyHQ(e.target.value));
        }}
        className={classes.inputs}
        fullWidth
        defaultValue={job.companyHeadquarters}
      />
      <Typography className={classes.inputTitles} variant="body1">
        Location Restriction
      </Typography>
      <InputBase
        required
        className={classes.inputs}
        fullWidth
        onChange={e => {
          dispatch(editJobChangedLocationRestriction(e.target.value));
        }}
        defaultValue={job.locationRestriction}
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
          dispatch(editJobChangedTags(tags));
        }}
        defaultValue={job.tags}
      />
      <Typography className={classes.inputCaptions} variant="caption">
        Comma seperated tags. Please keep in mind that these tags are very
        important for applicants. Minimum one, maximum three tags are allowed.
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
        defaultValue={job.description}
        onChange={e => dispatch(editJobChangedDescription(e.target.value))}
      />
      <Typography className={classes.inputTitles} variant="body1">
        Responsibilities
      </Typography>
      <InputBase
        className={classes.inputs}
        fullWidth
        multiline
        rows="4"
        defaultValue={job.responsibilities}
        onChange={e => dispatch(editJobChangedResponsibilities(e.target.value))}
      />
      <Typography className={classes.inputTitles} variant="body1">
        Requirements
      </Typography>
      <InputBase
        className={classes.inputs}
        fullWidth
        multiline
        rows="4"
        defaultValue={job.requirements}
        onChange={e => dispatch(editJobChangedRequirements(e.target.value))}
      />
      <Typography className={classes.inputTitles} variant="body1">
        Nice to have
      </Typography>
      <InputBase
        className={classes.inputs}
        fullWidth
        multiline
        rows="4"
        defaultValue={job.niceToHave}
        onChange={e => dispatch(editJobChangedNiceToHave(e.target.value))}
      />
      <Typography className={classes.inputTitles} variant="body1">
        Apply URL or Apply Email*
      </Typography>
      <InputBase
        onChange={e => {
          dispatch(editJobChangedApplyLink(e.target.value));
        }}
        required
        className={classes.inputs}
        fullWidth
        defaultValue={job.applyLink}
      />
      <Typography className={classes.inputCaptions} variant="caption">
        You can supply the email or the url. Note that this email will be
        public.
      </Typography>
      <div className={classes.buttonContainer}>
        <Button
          color="secondary"
          variant="contained"
          className={classes.confirmButton}
          onClick={() => {
            dispatch(postEditedJob(state, keyState.jobId, keyState.key));
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default EditJobPost;
