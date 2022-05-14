import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Chess from '../assets/alt-icon.png';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
  nav: {
    paddingTop: 32,
    paddingBottom: 32,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    maxHeight: 32,
    marginRight: 16,
  },
  navBar: {
    backgroundColor: 'transparent !important',
    color: '#373C46',
  },
});

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
}

export const Header = (props: Props) => {
  const { window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 620,
    target: window ? window() : undefined,
  });

  function ElevationScroll(props: Props) {
    const { children, window } = props;
    if (children) {
      return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      });
    }
    return null;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          className={classes.navBar}
          style={{ position: trigger ? 'fixed' : 'initial' }}
        >
          <Grid
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            wrap='nowrap'
            spacing={2}
            className={classes.nav}
            style={{
              backgroundColor: trigger ? '#D2F0FF' : 'transparent',
              paddingLeft: trigger ? '80px' : '0px',
            }}
          >
            <Grid item className={classes.item}>
              <img src={Chess} alt='chess icon' className={classes.img} />
              <Typography variant='h4'>CRYPTOCHESS</Typography>
            </Grid>
          </Grid>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};
