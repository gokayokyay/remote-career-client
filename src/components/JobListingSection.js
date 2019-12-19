/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import JobCard from './JobCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '4px',
    '@media (min-width:600px)': {
      padding: '16px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '32px',
      maxWidth: '70%',
      margin: 'auto',
    },
  },
  dateText: {
    fontWeight: 'bold',
  },
  listSection: {
    width: '100%',
    marginTop: 12,
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: 25,
    overflow: 'hidden',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.25)',
  },
}));

export default function JobListingSection(props) {
  const classes = useStyles();
  const { date } = props;
  return (
    <Grid container className={classes.root}>
      <Typography variant="h5" className={classes.dateText}>
        {date}
      </Typography>
      <Grid container className={classes.listSection}>
        <JobCard
          tags={['EU Only', 'Node.js']}
          jobName="Software Architect"
          logoURI="./awf.png"
          companyName="IFAW"
          jobDescription="Aasbsabasb asdashd aslkdjlaksjd alksjdlaskdjls lahdjasnkmvlkamfkam jafdjasıj ıajdı ıajsdıaskldngvlks"
        />
        <JobCard
          tags={['Python', 'Flask', 'API']}
          jobName="Senior Backend Engineer"
          logoURI="./wwf.png"
          companyName="IFAW"
          jobDescription="Aasbsabasb asdashd aslkdjlaksjd alksjdlaskdjls lahdjasnkmvlkamfkam jafdjasıj ıajdı ıajsdıaskldngvlks"
        />
        {/* <JobCard jobName="Software Architect" companyName="IFAW" />
        <JobCard jobName="Software Architect" companyName="IFAW" />
        <JobCard jobName="Software Architect" companyName="IFAW" />
        <JobCard jobName="Software Architect" companyName="IFAW" /> */}
      </Grid>
    </Grid>
  );
}
