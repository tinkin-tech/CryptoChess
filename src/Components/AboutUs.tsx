import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const AboutUs = () => {
  return (
    <Container style={{marginBottom: '330px'}}>
      <Typography variant='h1'>About us</Typography>
      <Typography variant='h4' style={{ width: '643px', fontSize: '30px' }}>
        We are a group of colleagues from Tinkin One, a tech startup, who got
        together to generate a collection of NFTs, just for fun. Participants
        include Developers, UXUI designers and Project Managers.
      </Typography>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '165px ',
          gap: '22px',
          fontSize: '30px',
        }}
      >
        <Typography
          variant='h5'
          style={{ marginRight: '50px', fontSize: '30px' }}
        >
          Alex Arevalo
        </Typography>
        <Typography
          variant='h5'
          style={{ marginLeft: '50px', fontSize: '30px' }}
        >
          Lucia Olivera
        </Typography>
        <Typography
          variant='h5'
          style={{ marginRight: '50px', fontSize: '30px' }}
        >
          Belén Marte
        </Typography>
        <Typography
          variant='h5'
          style={{ marginLeft: '50px', fontSize: '30px' }}
        >
          Pedro Altamirano
        </Typography>
        <Typography
          variant='h5'
          style={{ marginRight: '50px', fontSize: '30px' }}
        >
          Lucila Allende
        </Typography>
        <Typography
          variant='h5'
          style={{ marginLeft: '50px', fontSize: '30px' }}
        >
          Edwin Guamushig
        </Typography>
        <Typography
          variant='h5'
          style={{ marginRight: '50px', fontSize: '30px' }}
        >
          Paul Jarrin
        </Typography>
      </Container>
    </Container>
  );
};

export default AboutUs;
