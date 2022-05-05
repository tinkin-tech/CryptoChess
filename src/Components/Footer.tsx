import { Theme, makeStyles, Typography, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { padding } from '@mui/system';
import Chess from '../assets/icon.png';

const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    backgroundColor: '#D2F0FF',
    padding: '30px 80px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    maxHeight: 32,
    marginRight: 16,
  },
  email: {
    fontSize: '30px',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Grid
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        wrap='nowrap'
        spacing={2}
        className={classes.nav}
      >
        <Grid item className={classes.item}>
          <Container className={classes.item}>
            <img src={Chess} alt='chess icon' className={classes.img} />
            <Typography variant='h4'>CRYPTOCHESS</Typography>
          </Container>
          <Typography variant='h5' className={classes.email}>cryptochess@tinkin.one</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
