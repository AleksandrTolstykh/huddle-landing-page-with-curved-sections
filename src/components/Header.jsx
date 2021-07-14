import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';
import Stats from './Stats';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 50,
  },
  tryButton: {
    textAlign: 'right',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    color: 'hsl(192, 100%, 9%)',
    fontFamily: 'Poppins',
    fontWeight: 700,
  },
  text: {
    color: 'hsl(192, 100%, 9%)',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    marginBottom: 50,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <img src='images/logo.svg' alt='logo' />
        </Grid>
        <Grid item xs={6} className={classes.tryButton}>
          <CustomButton
            content='Try It Free'
            background='white'
            border='hsl(321, 100%, 78%)'
            color='hsl(321, 100%, 78%)'
            opacity='50%'
          />
        </Grid>
        <Grid item xs={12} className={classes.content}>
          <h1 className={classes.title}>Build The Community Your Fans Will Love</h1>
          <p className={classes.text}>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
          <Box>
            <CustomButton
              content='Get Started For Free'
              background='hsl(322, 100%, 66%)'
              color='white'
              opacity='50%'
            />
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.content}>
          <img src='images/screen-mockups.svg' alt='illustration' width='75%' />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stats
            image='images/icon-communities.svg'
            title='1.4k+'
            text='Communities Formed'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stats
            image='images/icon-messages.svg'
            title='2.7m+'
            text='Messages Sent'
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
