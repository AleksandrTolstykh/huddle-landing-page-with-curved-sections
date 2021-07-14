import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EmailField from './EmailField';
import CustomButton from './CustomButton';
import { CustomFaceBookIcon, CustomTwitterIcon, CustomInstagramIcon } from './Icons'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(192, 100%, 9%)',
    color: 'white',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 100,
    paddingRight: 100,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 25,
      paddingRight: 25,
    },
  },
  label: {
    marginLeft: 40,
    position: 'relative',
    bottom: 45,
  },
  item1: {
    order: 1,
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  item2: {
    order: 2,
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
  button: {
    textAlign: 'right',
  }
}));

function Contacts() {
  const classes = useStyles();

  return (
    <Box>
      <img src='images/bg-footer-top-desktop.svg' alt='' width='100%' />
      <Grid container spacing={5} className={classes.root}>
        <Grid item xs={12} md={6} className={classes.item1}>
          <img src='images/logo-white.svg' alt='logo' />
          <Box>
            <LocationOnIcon />
            <p className={classes.label}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <PhoneInTalkIcon />
            <p className={classes.label}>+1-543-123-4567</p>
            <MailOutlineIcon />
            <p className={classes.label}>example@huddle.com</p>
          </Box>
          <Box>
            <CustomFaceBookIcon />
            <CustomTwitterIcon />
            <CustomInstagramIcon />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className={classes.item2}>
          <h1 className={classes.label}>Newsletter</h1>
          <p className={classes.label}>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address</p>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <EmailField />
            </Grid>
            <Grid item xs={12} md={6} className={classes.button}>
              <CustomButton
                content='Subscribe'
                background='hsl(322, 100%, 66%)'
                border='hsl(322, 100%, 66%)'
                color='white'
                opacity='50%'
                squaredBorder
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contacts;
