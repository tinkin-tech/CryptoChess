import * as anchor from '@project-serum/anchor';
import {
  Box,
  Container,
  makeStyles,
  styled,
  Theme,
  Typography,
  Grid,
} from '@material-ui/core';

import { Header } from './Components/Header';
import Timer from './Components/Timer';
import RarityComponent from './Components/RarityComponent';

import ChessBg from './assets/chessbg.svg';
import RarityBGBg from './assets/background_rarity.png';
import { ReactComponent as Bishop } from './assets/alfil.svg';
import { ReactComponent as Horse } from './assets/caballo.svg';
import { ReactComponent as Heart } from './assets/heart1.svg';
import { ReactComponent as Peon } from './assets/peon.svg';
import { ReactComponent as Queen } from './assets/queen1.svg';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';

const MainContainer = styled(Container)(() => ({
  backgroundImage: `url(${ChessBg})`,
  minWidth: '100%',
  minHeight: 1080,
  margin: 0,
}));

const RarityContainer = styled(Container)(() => ({
  backgroundImage: `linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0)), url(${RarityBGBg})`,
  minWidth: '100%',
  margin: 0,
}));

const TitleBox = styled(Box)(() => ({
  maxWidth: '50%',
}));

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: '#2B434F',
    fontWeight: 800,
    marginBottom: 32,
  },
  subtitle: {
    color: '#587F93',
    fontWeight: 400,
    marginBottom: 32,
  },
  Bishop: {
    position: 'absolute',
    top: 380,
    right: 200,
  },
  Horse: {
    position: 'absolute',
    top: 300,
    right: 420,
  },
  Heart: {
    position: 'absolute',
    top: 750,
    right: 550,
  },
  Peon: {
    position: 'absolute',
    top: 300,
    right: 0,
  },
  Queen: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));

export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}

const Home = (props: HomeProps) => {
  const classes = useStyles();

  return (
    <>
      <MainContainer disableGutters>
        <Container maxWidth='lg' disableGutters>
          <Header />
          <TitleBox>
            <Typography variant='h1' className={classes.title}>
              Join the chessy world of NFT!
            </Typography>
            <Typography variant='h4' className={classes.subtitle}>
              333 algorithmically generated, unique and cute chess pieces
            </Typography>
          </TitleBox>
          <Bishop className={`${classes.Bishop} floating-img`} />
          <Horse className={`${classes.Horse} floating-img-knight`} />
          <Heart className={`${classes.Heart} floating-img-heart`} />
          <Peon className={`${classes.Peon} floating-img-pawn`} />
          <Queen className={`${classes.Queen} floating-img-queen`} />

          <Timer
            candyMachineId={props.candyMachineId}
            connection={props.connection}
            startDate={props.startDate}
            txTimeout={props.txTimeout}
            rpcHost={props.rpcHost}
          />
        </Container>
      </MainContainer>

      <Grid container direction='column' spacing={1}>
        <Grid
          item
          sm
          container
          xs={12}
          justifyContent='center'
          alignItems='center'
          direction='column'
          spacing={2}
          style={{ backgroundColor: '#FFF' }}
        >
          <Grid
            item
            direction='row'
            style={{
              width: '100%',
              backgroundColor: '#FFF',
            }}
          >
            <Typography
              variant='h4'
              style={{
                fontSize: '100px',
                color: '#A4ACBA',
                justifySelf: 'flex-start',
                width: '100%',
                paddingLeft: '80px',
                backgroundColor: '#FFF',
              }}
            >
              Rarity
            </Typography>
          </Grid>
          <Grid item style={{ width: '100%' }}>
            <RarityContainer>
              <RarityComponent />
            </RarityContainer>
          </Grid>
        </Grid>
        <Grid
          item
          sm
          justifyContent='center'
          alignItems='center'
          direction='column'
        >
          <AboutUs />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
