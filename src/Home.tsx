import * as anchor from '@project-serum/anchor'
import { Box, Button, Container, makeStyles, styled, Theme, Typography, Container, Grid, Typography } from '@material-ui/core'


import { Header, Header } from './Header'
import Timer from './Components/Timer'

import ChessBg from './assets/chessbg.svg'
import { ReactComponent as Bishop } from './assets/alfil.svg'
import { ReactComponent as Horse } from './assets/caballo.svg'
import { ReactComponent as Heart } from './assets/heart1.svg'
import { ReactComponent as Peon } from './assets/peon.svg'
import { ReactComponent as Queen } from './assets/queen.svg'


import { MintButton } from './MintButton';
import AlertComponent from './Components/AlertComponent';
import styled from 'styled-components';
import RarityComponent from './Components/RarityComponent';

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

  const [isUserMinting, setIsUserMinting] = useState(false);
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: '',
    severity: undefined,
  });

  const rpcUrl = props.rpcHost;
  const wallet = useWallet();

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const refreshCandyMachineState = useCallback(async () => {
    if (!anchorWallet) {
      return;
    }

    if (props.candyMachineId) {
      try {
        const cndy = await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection
        );
        setCandyMachine(cndy);
      } catch (e) {
        console.log('There was a problem fetching Candy Machine state');
        console.log(e);
      }
    }
  }, [anchorWallet, props.candyMachineId, props.connection]);

  const onMint = async () => {
    try {
      setIsUserMinting(true);
      document.getElementById('#identity')?.click();
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = (
          await mintOneToken(candyMachine, wallet.publicKey)
        )[0];

        let status: any = { err: true };
        if (mintTxId) {
          status = await awaitTransactionSignatureConfirmation(
            mintTxId,
            props.txTimeout,
            props.connection,
            true
          );
        }

        if (status && !status.err) {
          setAlertState({
            open: true,
            message: 'Congratulations! Mint succeeded!',
            severity: 'success',
          });
        } else {
          setAlertState({
            open: true,
            message: 'Mint failed! Please try again!',
            severity: 'error',
          });
        }
      }
    } catch (error: any) {
      let message = error.msg || 'Minting failed! Please try again!';
      if (!error.msg) {
        if (!error.message) {
          message = 'Transaction Timeout! Please try again.';
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error',
      });
    } finally {
      setIsUserMinting(false);
    }
  };

  useEffect(() => {
    refreshCandyMachineState();
  }, [
    anchorWallet,
    props.candyMachineId,
    props.connection,
    refreshCandyMachineState,
  ]);

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
        <Grid item xs={12}>
          <Container style={{ backgroundColor: '#fff' }}>
            <h1>Join the chessy world of NFT!</h1>
            <h6>333 algorithmically generated, unique and cute chess pieces</h6>
            <Container maxWidth='xs' style={{ position: 'relative' }}>
              {!wallet.connected ? (
                <ConnectButton>Connect Wallet</ConnectButton>
              ) : (
                <>
                  <Header candyMachine={candyMachine} />
                  <MintContainer>
                    {candyMachine?.state.isActive &&
                      candyMachine?.state.gatekeeper &&
                      wallet.publicKey &&
                      wallet.signTransaction ? (
                      <GatewayProvider
                        wallet={{
                          publicKey:
                            wallet.publicKey ||
                            new PublicKey(CANDY_MACHINE_PROGRAM),
                          //@ts-ignore
                          signTransaction: wallet.signTransaction,
                        }}
                        gatekeeperNetwork={
                          candyMachine?.state?.gatekeeper?.gatekeeperNetwork
                        }
                        clusterUrl={rpcUrl}
                        options={{ autoShowModal: false }}
                      >
                        <MintButton
                          candyMachine={candyMachine}
                          isMinting={isUserMinting}
                          onMint={onMint}
                        />
                      </GatewayProvider>
                    ) : (
                      <MintButton
                        candyMachine={candyMachine}
                        isMinting={isUserMinting}
                        onMint={onMint}
                      />
                    )}
                  </MintContainer>
                </>
              )}
            </Container>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <AlertComponent alertState={alertState} setAlertState={setAlertState} />
        </Grid>
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
