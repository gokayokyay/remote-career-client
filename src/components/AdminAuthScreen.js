import React from 'react';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { adminCheckKey } from '../redux/actions';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSection: {
    flex: 1,
    // display: 'block',
    maxWidth: '100%',
    '@media (min-width:600px)': {
      maxWidth: '680px',
    },
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: 25,
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    padding: 24,
    height: 'auto',
  },
  inputTitles: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  error: {
    fontWeight: 'bold',
    marginTop: 8,
    color: 'red',
  },
  inputs: {
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    paddingLeft: 8,
    marginTop: 8,
    marginLeft: -4,
  },
  sendButton: {
    fontWeight: 'bold',
    marginTop: 12,
  },
}));

function AuthScreen() {
  const [key, setKey] = React.useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(st => st.admin);
  const router = useRouter();
  if (state.success && state.key) {
    router.push('/admin');
  }
  return (
    <div className={classes.root}>
      <div className={classes.inputSection}>
        <Typography className={classes.inputTitles}>
          Please enter admin key
        </Typography>
        <InputBase
          onChange={e => {
            setKey(e.target.value);
          }}
          required
          className={classes.inputs}
          fullWidth
        />
        <Button
          color="secondary"
          variant="contained"
          className={classes.sendButton}
          onClick={() => {
            dispatch(adminCheckKey(key));
          }}
        >
          Send
        </Button>
        <Typography className={classes.error}>
          {state.error ? 'Error' : ''}
        </Typography>
      </div>
    </div>
  );
}

export default AuthScreen;
