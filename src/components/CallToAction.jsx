import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'hsl(192, 100%, 9%)',
    fontFamily: 'Poppins',
    fontWeight: 700,
    textAlign: 'center',
    padding: 50,
  },
}));

function CallToAction(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h1>Ready To Build Your Community?</h1>
      <CustomButton
        content='Get Started For Free'
        background='hsl(322, 100%, 66%)'
        color='white'
        opacity='50%'
      />
    </Box>
  );
}

export default CallToAction;
