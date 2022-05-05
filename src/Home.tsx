import * as anchor from '@project-serum/anchor'
import { Box, Button, Container, makeStyles, styled, Theme, Typography, Grid } from '@material-ui/core'


import { Header } from './Header'
import Timer from './Components/Timer'
import RarityComponent from './Components/RarityComponent';
import Wallet from './Wallet'

import ChessBg from './assets/chessbg.svg'
import { ReactComponent as Bishop } from './assets/alfil.svg'
import { ReactComponent as Horse } from './assets/caballo.svg'
import { ReactComponent as Heart } from './assets/heart1.svg'
import { ReactComponent as Peon } from './assets/peon.svg'
import { ReactComponent as Queen } from './assets/queen1.svg'


const MainContainer = styled(Container)(() => ({
  backgroundImage: `url(${ChessBg})`,
  minWidth: '100%',
  minHeight: 1080,
  margin: 0,
}));

const TitleBox = styled(Box)(() => ({
  maxWidth: '50%',
}))

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
}))

export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}

const Home = (props: HomeProps) => {
  const classes = useStyles()

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
            <Button variant='contained'>Select wallet</Button>
            <Wallet candyMachineId={props.candyMachineId} connection={props.connection} startDate={props.startDate} txTimeout={props.txTimeout} rpcHost={props.rpcHost} />
          </TitleBox>

          <Bishop className={classes.Bishop} />
          <Horse className={classes.Horse} />
          <Heart className={classes.Heart} />
          <Peon className={classes.Peon} />
          <Queen className={classes.Queen} />

          <Timer />

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
        >
          <Grid item>
            <Typography variant='h4'>Rarity</Typography>
          </Grid>
          <Grid item>
            <RarityComponent />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
