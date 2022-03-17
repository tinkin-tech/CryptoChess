import * as anchor from '@project-serum/anchor'
import { Box, Button, Container, makeStyles, styled, Theme, Typography } from '@material-ui/core'

import { Header } from './Header'

import ChessBg from './assets/chessbg.svg'
import Cloud from './assets/cloud.png'

import { ReactComponent as Alfil } from './assets/alfil.svg'
import { ReactComponent as Caballo } from './assets/caballo.svg'
import { ReactComponent as Heart1 } from './assets/heart1.svg'
import { ReactComponent as Heart2 } from './assets/heart2.svg'
import { ReactComponent as Peon } from './assets/peon.svg'
import { ReactComponent as Qeen } from './assets/qeen.svg'

const MainContainer = styled(Container)(() => ({
  backgroundImage: `url(${ChessBg})`,
  minWidth: '100vw',
  // minHeight: '100vh',
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
  Alfil: {
    position: 'absolute',
    top: 380,
    right: 200,
  },
  Caballo: {
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
  Qeen: {
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
    <MainContainer>
      <Container maxWidth='lg'>
        <Header />
        <TitleBox>
          <Typography variant='h2' className={classes.title}>
            Join the chessy world of NFT!
          </Typography>
          <Typography variant='h4' className={classes.subtitle}>
            333 algorithmically generated, unique and cute chess pieces
          </Typography>
          <Button variant='contained'>Select wallet</Button>
        </TitleBox>

        <Alfil className={classes.Alfil} />
        <Caballo className={classes.Caballo} />
        <img src={Cloud} className={classes.Cloud} />
        <Heart1 className={classes.Heart1} />
        <Heart2 className={classes.Heart2} />
        <Peon className={classes.Peon} />
        <Qeen className={classes.Qeen} />
      </Container>
    </MainContainer>
  );
};

export default Home;
