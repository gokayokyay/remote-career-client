import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  searchTitle: {
    fontWeight: 'bold',
  },
  searchInputContainer: {
    marginTop: 8,
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    // boxSizing: 'border-box',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    paddingLeft: 8,
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    fontWeight: 'bold',
  },
  searchIcon: {
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
});

export default function FilterSection() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={9} md={6} className={classes.item}>
        <Typography variant="h6" className={classes.searchTitle}>
          Search for the perfect job
        </Typography>
        <div className={classes.searchInputContainer}>
          <SearchIcon className={classes.searchIcon} />
          <InputBase className={classes.searchInput} fullWidth />
        </div>
      </Grid>
    </Grid>
  );
}
