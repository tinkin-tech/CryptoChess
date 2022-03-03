import * as anchor from '@project-serum/anchor'
import { Container } from '@material-ui/core'

import { Header } from './Header'

import styled from 'styled-components'

import './global.css'


const MintContainer = styled.div``; // add your owns styles here

export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}

const Home = (props: HomeProps) => {
  return (
    <Container style={{ backgroundColor: '#fff' }}>
      <Header />
      <h1>Join the chessy world of NFT!</h1>
      <h6>333 algorithmically generated, unique and cute chess pieces</h6>
    </Container>
  );
};

export default Home;
