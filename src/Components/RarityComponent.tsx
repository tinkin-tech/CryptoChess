import {
  AppBar,
  Box,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Typography
} from '@material-ui/core';
import React from 'react';
import { Stack } from '@mui/material';
import { ReactComponent as King } from '../assets/king.svg'
import { ReactComponent as Queen } from '../assets/queen.svg'
import { ReactComponent as Knight } from '../assets/knight.svg'
import { ReactComponent as Castle } from '../assets/castle.svg'
import { ReactComponent as Bishop } from '../assets/bishop.svg'
import { ReactComponent as Pawn } from '../assets/pawn.svg'

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
    // backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: '#FFFFFF',
    "& .MuiTabs-indicator": {
      backgroundColor: "#2B434F",
    },
    "& .MuiTab-textColorInherit": {
      color: '#C3CAD7',
      // opacity: '0.35'
    },
    "& .MuiTab-root": {
      textTransform: 'none'
    },
    "& .Mui-selected": {
      color: '#2B434F',
      fontWeight: 'bold',
      opacity: '1'
    }
  },
  appbar: {
    boxShadow: 'none',
    elevation: 0,
  },
  king: {
    padding: '5px',
  }

}));

const RarityComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    // console.log({ newValue });
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
          <Tab label='King' {...a11yProps(0)} />
          <Tab label='Queen' {...a11yProps(1)} />
          <Tab label='Knight' {...a11yProps(2)} />
          <Tab label='Castle' {...a11yProps(3)} />
          <Tab label='Bishop' {...a11yProps(4)} />
          <Tab label='Pawn' {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div>
          <Stack direction="row" spacing={10}>
            <King className={classes.king} />
            <span>Item One</span>
          </Stack>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <Stack direction="row" spacing={10}>
            <Queen />
            <span>Item Two</span>
          </Stack>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <Stack direction="row" spacing={10}>
            <Knight />
            <span>Item Three</span>
          </Stack>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>
          <Stack direction="row" spacing={10}>
            <Castle />
            <span>Item Four</span>
          </Stack>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div>
          <Stack direction="row" spacing={10}>
            <Bishop />
            <span>Item Five</span>
          </Stack>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div>
          <Stack direction="row" spacing={10}>
            <Pawn />
            <span>Item Six</span>
          </Stack>
        </div>
      </TabPanel>
    </div>

  );
};

export default RarityComponent;
