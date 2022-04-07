import * as anchor from '@project-serum/anchor'
import { Box, Button, Container, makeStyles, styled, Theme, Typography } from '@material-ui/core'

import { Header } from './Header'

import ChessBg from './assets/chessbg.svg'
import Cloud from './assets/cloud.png'

import { ReactComponent as Bishop } from './assets/alfil.svg'
import { ReactComponent as Horse } from './assets/caballo.svg'
import { ReactComponent as Heart1 } from './assets/heart1.svg'
import { ReactComponent as Heart2 } from './assets/heart2.svg'
import { ReactComponent as Peon } from './assets/peon.svg'
import { ReactComponent as Queen } from './assets/queen.svg'
import Timer from './Components/Timer'

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
  second: {
    display: 'flex',
    flexDirection: 'row',
  },
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
  Cloud: {
    position: 'absolute',
    top: 620,
    right: 750,
  },
  Heart1: {
    position: 'absolute',
    top: 100,
    right: 470,
  },
  Heart2: {
    position: 'absolute',
    top: 800,
    right: 80,
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
        </TitleBox>

        <Bishop className={classes.Bishop} />
        <Horse className={classes.Horse} />
        <img src={Cloud} className={classes.Cloud} />
        <Heart1 className={classes.Heart1} />
        <Heart2 className={classes.Heart2} />
        <Peon className={classes.Peon} />
        <Queen className={classes.Queen} />
        <Timer />
      </Container>
    </MainContainer>
  );
};

export default Home;
