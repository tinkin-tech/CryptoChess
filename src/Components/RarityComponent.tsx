import {
  AppBar,
  Box,
  Link,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Stack } from '@mui/material';
import { ReactComponent as King } from '../assets/king.svg';
import { ReactComponent as Queen } from '../assets/queen.svg';
import { ReactComponent as Knight } from '../assets/knight.svg';
import { ReactComponent as Castle } from '../assets/castle.svg';
import { ReactComponent as Bishop } from '../assets/bishop.svg';
import { ReactComponent as Pawn } from '../assets/pawn.svg';
import { ArrowForward } from '@material-ui/icons';

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
    height: 1009,
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
  appBar: {
    boxShadow: 'none',
    elevation: 0,
  },
  imagePiece: {
    marginTop: 80,
  },
  spanTop: {
    color: '#505763',
    fontFamily: 'VT323',
    fontStyle: 'normal',
    fontSize: 30,
    fontWeight: 400,
  },
  spanBottom: {
    color: '#2B434F',
    fontFamily: 'VT323',
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: 400,
    textAlign: 'center',
  },
  divInfo: {
    marginTop: 80,
  },
  hr: {
    border: 'none',
    borderBottom: '5px dotted #505763',
    height: '1px',
    width: '50%',
  },
  hrRarity: {
    border: 'none',
    borderBottom: '5px dotted #505763',
    height: '1px',
    width: '60%',
  },
  tab: {
    fontSize: '25px',
    lineHeight: '32px',
    width: '213px',
  },
}));

interface ITabData {
  image: React.ReactNode;
  totalPieces: number;
  totalRarity: number;
  backgroundRarity: number;
  bodyRarity?: number;
  eyesRarity: number;
  mouthRarity: number;
  accessoriesRarity: number;
  hrefText: string;
}

const RarityComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  const tabData: ITabData[] = [
    {
      image: <King className={classes.imagePiece} />,
      totalPieces: 25,
      totalRarity: 7.5,
      backgroundRarity: 16,
      bodyRarity: 2,
      eyesRarity: 4,
      mouthRarity: 3,
      accessoriesRarity: 7,
      hrefText:
        'https://docs.google.com/spreadsheets/d/1Lt7bO14HOArconHUQa5jjisQPkwscwm9gADPNy7AEWg/edit#gid=1212917306',
    },
    {
      image: <Queen className={classes.imagePiece} />,
      totalPieces: 25,
      totalRarity: 7.5,
      backgroundRarity: 16,
      eyesRarity: 4,
      mouthRarity: 3,
      accessoriesRarity: 7,
      hrefText:
        'https://docs.google.com/spreadsheets/d/1Lt7bO14HOArconHUQa5jjisQPkwscwm9gADPNy7AEWg/edit#gid=518764386',
    },
    {
      image: <Knight className={classes.imagePiece} />,
      totalPieces: 50,
      totalRarity: 15.01,
      backgroundRarity: 16,
      eyesRarity: 5,
      mouthRarity: 3,
      accessoriesRarity: 7,
      hrefText:
        'https://docs.google.com/spreadsheets/d/1Lt7bO14HOArconHUQa5jjisQPkwscwm9gADPNy7AEWg/edit#gid=768874203',
    },
    {
      image: <Castle />,
      totalPieces: 50,
      totalRarity: 15.01,
      backgroundRarity: 16,
      eyesRarity: 5,
      mouthRarity: 2,
      accessoriesRarity: 7,
      hrefText:
        'https://docs.google.com/spreadsheets/d/1Lt7bO14HOArconHUQa5jjisQPkwscwm9gADPNy7AEWg/edit#gid=981986046',
    },
    {
      image: <Bishop style={{ marginTop: '40px' }} />,
      totalPieces: 80,
      totalRarity: 24.02,
      backgroundRarity: 16,
      eyesRarity: 4,
      mouthRarity: 3,
      accessoriesRarity: 7,
      hrefText:
        'https://docs.google.com/spreadsheets/d/1Lt7bO14HOArconHUQa5jjisQPkwscwm9gADPNy7AEWg/edit#gid=856289457',
    },
    {
      image: <Pawn className={classes.imagePiece} />,
      totalPieces: 103,
      totalRarity: 30.93,
      backgroundRarity: 16,
      eyesRarity: 5,
      mouthRarity: 3,
      accessoriesRarity: 7,
      hrefText:
        'https://docs.google.com/spreadsheets/d/1Lt7bO14HOArconHUQa5jjisQPkwscwm9gADPNy7AEWg/edit#gid=943463266',
    },
  ];

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const TabPanelComponent = (data: ITabData, indexData: number) => (
    <TabPanel value={value} index={indexData} key={indexData}>
      <Stack direction='row' justifyContent='space-around'>
        {data.image}
        <Stack spacing={2}>
          <Stack
            direction='row'
            spacing={2}
            marginTop={6}
            alignItems='baseline'
            width='700px'
          >
            <span className={classes.spanTop}>Total pieces</span>
            <div className={classes.hr} />
            <span className={classes.spanTop}>{data.totalPieces}</span>
          </Stack>
          <Stack direction='row' spacing={2} alignItems='baseline'>
            <span className={classes.spanTop}>Rarity</span>
            <div className={classes.hrRarity} />
            <span className={classes.spanTop}>{data.totalRarity}%</span>
          </Stack>
          <Stack
            direction='column'
            style={{ marginTop: '50px', marginRight: '30px' }}
            alignItems='center'
          >
            {data?.bodyRarity && (
              <>
                <span className={classes.spanBottom}>Body</span>
                <span
                  className={classes.spanBottom}
                  style={{ marginBottom: '24px' }}
                >
                  {data.bodyRarity} variations
                </span>
              </>
            )}
            <span className={classes.spanBottom}>Background</span>
            <span className={classes.spanBottom}>
              {data.backgroundRarity} variations
            </span>
            <span className={classes.spanBottom} style={{ marginTop: '24px' }}>
              Eyes
            </span>
            <span
              className={classes.spanBottom}
              style={{ marginBottom: '24px' }}
            >
              {data.eyesRarity} variations
            </span>
            <span className={classes.spanBottom}>Mouth</span>
            <span
              className={classes.spanBottom}
              style={{ marginBottom: '24px' }}
            >
              {data.mouthRarity} variations
            </span>
            <span className={classes.spanBottom}>Accessories</span>
            <span className={classes.spanBottom}>
              {data.accessoriesRarity} variations
            </span>
              <Link
                style={{ fontSize: '25px', color: '#000', marginTop: '10px' }}
                href={data.hrefText}
                target='_blank'
                rel='noreferrer'
              >
                <Stack direction='row' alignItems='center'>
                  <span>Check all rarity</span>
                  <ArrowForward
                    style={{ fontSize: '1.4rem', marginLeft: '5px ' }}
                  />
                </Stack>
              </Link>
          </Stack>
        </Stack>
      </Stack>
    </TabPanel>
  );

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
          className={classes.tabs}
        >
          <Tab className={classes.tab} label='King' {...a11yProps(0)} />
          <Tab className={classes.tab} label='Queen' {...a11yProps(1)} />
          <Tab className={classes.tab} label='Knight' {...a11yProps(2)} />
          <Tab className={classes.tab} label='Rook' {...a11yProps(3)} />
          <Tab className={classes.tab} label='Bishop' {...a11yProps(4)} />
          <Tab className={classes.tab} label='Pawn' {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      {tabData.map((data, index) => {
        return TabPanelComponent(data, index);
      })}
    </div>
  );
};

export default RarityComponent;
