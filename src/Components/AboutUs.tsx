import { Container, Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Sunglassess } from '../assets/sunglassess.svg';
import { ReactComponent as Cap } from '../assets/cap.svg';
import { ReactComponent as Glasses } from '../assets/glasses.svg';
import { ReactComponent as WomanMouth } from '../assets/woman_mouth.svg';
import { ReactComponent as WomanHat } from '../assets/hat_woman.svg';
import { ReactComponent as Heart } from '../assets/heart1.svg';
import { ReactComponent as RectangleBotton } from '../assets/rectangle_botton_left.svg';
import { ReactComponent as RectangleTop } from '../assets/rectangle_top_right.svg';
import React from 'react';

const AboutUs = () => {
  return (
    <Container
      style={{ height: '1277px', border: '1px solid #FFFFFF' }}
      maxWidth={false}
      disableGutters={true}
    >
      <RectangleTop
        style={{
          position: 'absolute',
          width: '137.08px',
          height: '274.17px',
          right: '0px',
          marginTop: '0px',
          zIndex: '0',
        }}
      />
      <RectangleBotton
        style={{
          position: 'absolute',
          width: '274.17px',
          height: '274.17px',
          right: '119px',
          marginTop: '273px',
          zIndex: '0',
        }}
      />
      <Typography
        variant='h1'
        style={{ marginLeft: '80px', marginTop: '113px', color: '#A4ACBA' }}
      >
        About us
      </Typography>
      <Typography
        variant='h4'
        style={{
          width: '643px',
          height: '144px',
          fontSize: '30px',
          lineHeight: '36px',
          marginLeft: '80px',
          marginTop: '24px',
          color: '#373C46',
        }}
      >
        We are a group of colleagues from{' '}
        <Link href='https://www.tinkin.one/' target='_blank' rel='noreferrer'>
          Tinkin One
        </Link>
        , a tech startup, who got together to generate a collection of NFTs,
        just for fun. Participants include Developers, UXUI designers and
        Project Managers.
      </Typography>
      <Cap
        className='floating-img-orbit'
        style={{ position: 'absolute', left: '70px', marginTop: '113px' }}
      />
      <Glasses
        className='floating-img-orbit-3'
        style={{ position: 'absolute', left: '325px', marginTop: '314px' }}
      />
      <Sunglassess
        className='floating-img-orbit'
        style={{
          position: 'absolute',
          left: '136px',
          marginTop: '660px',
          zIndex: '1',
        }}
      />
      <WomanMouth
        className='floating-img-orbit'
        style={{ position: 'absolute', right: '338px', marginTop: '668px' }}
      />
      <WomanHat
        className='floating-img-orbit-3'
        style={{ position: 'absolute', right: '73px', marginTop: '446px' }}
      />
      <Heart
        className='floating-img-orbit'
        style={{
          position: 'absolute',
          right: '205px',
          marginTop: '-40px',
          zIndex: '1',
        }}
      />
      <RectangleBotton
        style={{
          position: 'absolute',
          width: '274.17px',
          height: '274.17px',
          left: '2px',
          marginTop: '608px',
          marginBottom: '0px',
          zIndex: '0',
        }}
      />

      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '167px ',
          marginBottom: '330px',
          gap: '22px',
          fontSize: '30px',
          color: '#373C46',
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
        <Typography
          variant='h5'
          style={{ marginLeft: '80px', fontSize: '30px' }}
        >
          Francisco Jiménez
        </Typography>
      </Container>
    </Container>
  );
};

export default AboutUs;
