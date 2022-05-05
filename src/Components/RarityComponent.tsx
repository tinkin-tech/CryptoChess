import {
  AppBar,
  Box,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Typography,
  Divider,
} from '@material-ui/core';
import React from 'react';
import { Stack } from '@mui/material';
import { ReactComponent as King } from '../assets/king.svg';
import { ReactComponent as Queen } from '../assets/queen.svg';
import { ReactComponent as Knight } from '../assets/knight.svg';
import { ReactComponent as Castle } from '../assets/castle.svg';
import { ReactComponent as Bishop } from '../assets/bishop.svg';
import { ReactComponent as Pawn } from '../assets/pawn.svg';
import Tablero from '../assets/tablero.svg';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  tabs: {
    margin: '0 auto',
    backgroundColor: '#FFFFFF',
    '& .MuiTabs-indicator': {
      backgroundColor: '#2B434F',
    },
    '& .MuiTab-textColorInherit': {
      color: '#C3CAD7',
    },
    '& .MuiTab-root': {
      textTransform: 'none',
    },
    '& .Mui-selected': {
      color: '#2B434F',
      fontWeight: 'bold',
      opacity: '1',
    },
  },
  appbar: {
    boxShadow: 'none',
    elevation: 0,
  },
  imagepiece: {
    marginTop: 135,
  },
  spantop: {
    color: '#505763',
    fontFamily: 'VT323',
    fontStyle: 'normal',
    fontSize: 30,
    fontWeight: 400,
  },
  spanbotton: {
    color: '#2B434F',
    fontFamily: 'VT323',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 400,
    textAlign: 'center',
  },
  divinfo: {
    marginTop: 80,
  },
  hr: {
    color: '#505763',
    border: '1px dashed #505763',
    flexDirection: 'column',
  },
  tab: {
    fontSize: '25px',
    lineHeight: '32px',
    width: '213px',
  },
}));

const RarityComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
          className={classes.tabs}
        >
          <Tab className={classes.tab} label='King' {...a11yProps(0)} />
          <Tab className={classes.tab} label='Queen' {...a11yProps(1)} />
          <Tab className={classes.tab} label='Knight' {...a11yProps(2)} />
          <Tab className={classes.tab} label='Castle' {...a11yProps(3)} />
          <Tab className={classes.tab} label='Bishop' {...a11yProps(4)} />
          <Tab className={classes.tab} label='Pawn' {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Stack direction='row' justifyContent='space-around'>
          <King className={classes.imagepiece} />
          <Stack spacing={2}>
            <div>
              <Stack direction='row' spacing={2} marginTop={15}>
                <span className={classes.spantop}>Total pieces</span>
                <span className={classes.spantop}>.............</span>
                <span className={classes.spantop}>333</span>
              </Stack>
              <Stack direction='row' spacing={2}>
                <span className={classes.spantop}>Rarity</span>
                <hr className={classes.hr} />
                <span className={classes.spantop}>5%</span>
              </Stack>
            </div>
            <div>
              <Stack marginTop={15}>
                <span className={classes.spanbotton}>Background: </span>
                <span className={classes.spanbotton}>55 rarity</span>
                <span className={classes.spanbotton}>Eyes</span>
                <span className={classes.spanbotton}>55 variations</span>
                <span className={classes.spanbotton}>Accessories</span>
                <span className={classes.spanbotton}>55 variations</span>
              </Stack>
            </div>
          </Stack>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack direction='row' spacing={10}>
          <Queen className={classes.imagepiece} />
          <span>Item Two</span>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack direction='row' spacing={10}>
          <Knight className={classes.imagepiece} />
          <span>Item Three</span>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Stack direction='row' spacing={10}>
          <Castle className={classes.imagepiece} />
          <span>Item Four</span>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Stack direction='row' spacing={10}>
          <Bishop className={classes.imagepiece} />
          <span>Item Five</span>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Stack direction='row' spacing={10}>
          <Pawn className={classes.imagepiece} />
          <span>Item Six</span>
        </Stack>
      </TabPanel>
    </div>
  );
};

export default RarityComponent;
