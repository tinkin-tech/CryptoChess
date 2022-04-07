import React, { useState } from 'react'
import { Button, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  main: {
    backgroundColor: '#F694C1',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 24,
    gap: 32,
  },
  button: {
    backgroundColor: '#D2F0FF',
  },
}))

const Timer = () => {
  const classes = useStyles()

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  return (
    <Container className={classes.main}>
      <Typography variant='h4'>
        Time left to minting
      </Typography>
      <Typography variant='h3'>
        {`${days}d : ${hours}h : ${minutes}m : ${seconds}s`}
      </Typography>
      <Button variant='contained' className={classes.button}>Mint now</Button>
    </Container>
  )
}

export default Timer