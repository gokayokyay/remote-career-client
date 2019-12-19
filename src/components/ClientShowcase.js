import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const images = [
  {
    path: './wwf.png',
    alt: 'WWF Logo',
  },
  {
    path: './awf.png',
    alt: 'AWF Logo',
  },
  {
    path: './sheldrick.png',
    alt: 'Sheldrick Wildlife Trust Logo',
  },
  {
    path: './ifaw_logo.png',
    alt: 'International Fund for Animal Welfare Logo',
  },
  {
    path: './defenders.png',
    alt: 'Defenders of Wildlife Logo',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    height: '100px',
    backgroundColor: '#F2F2F2',
    [theme.breakpoints.up('sm')]: {
      height: '20vh',
    },
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    opacity: 0.6,
    padding: 24,
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    marginLeft: 24,
    marginRight: 24,
  },
}));

export default function Showcase() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {images.map(img => (
        <img
          src={img.path}
          key={img.path}
          alt={img.alt}
          className={classes.image}
        />
      ))}
    </div>
  );
}
