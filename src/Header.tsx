import { Theme, makeStyles, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

import Chess from './assets/icon.png'

const useStyles = makeStyles((theme: Theme) => ({
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
    marginRight: 16
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <Grid direction="row" justifyContent="flex-start" alignItems='center' wrap="nowrap" spacing={2} className={classes.nav}>
      <Grid item className={classes.item}>
        <img src={Chess} alt='chess icon' className={classes.img} />
        <Typography variant='h4'>
          CRYPTOCHESS
        </Typography>
      </Grid>
    </Grid>
  );
};
