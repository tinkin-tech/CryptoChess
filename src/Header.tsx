import * as anchor from '@project-serum/anchor';

import {Theme, makeStyles} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

import Chess from './assets/icon.png'

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    color: '#85591F',
    fontSize: 12,
    alignItems: 'center',
    display: 'flex',
    fontFamily: 'Press Start 2P',
  },
  img: {
    marginRight: 8,
    maxHeight: 32
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems='center' wrap="nowrap" spacing={2}>
      <Grid item className={classes.item}>
        <img src={Chess} alt='chess icon' className={classes.img} />
        CRYPTOCHESS
      </Grid>
    </Grid>
  );
};
