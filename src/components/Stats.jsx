import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 200,
    [theme.breakpoints.down('sm')]: {
      padding: 50,
    }
  },
  content: {
    textAlign: 'center',
  },
  title: {
    color: 'hsl(192, 100%, 9%)',
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: 60,
  },
  text: {
    color: 'grey',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    marginBottom: 50,
    fontSize: 20,
  },
}));

function Stats(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={props.image} alt='logo' />
      <Box className={classes.content}>
        <h1 className={classes.title}>{props.title}</h1>
        <p className={classes.text}>{props.text}</p>
      </Box>
    </Box>
  );
}

export default Stats;
