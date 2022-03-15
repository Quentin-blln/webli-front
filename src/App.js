import logo from './logo.svg';
import * as React from 'react';
import Tools from './components/tools'

import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';


function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [toolSelected, setToolSelected] = React.useState(0)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              WEBLI
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography variant="h6" sx={{ m: 1, ml:6 }}>
          Welcome on Webli
        </Typography>
        <Tools toolIndex={toolSelected}/>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Tools:</Typography>
        <div><Button onClick={() => setToolSelected(1)}> Outils 1 </Button></div>
        <div><Button onClick={() => setToolSelected(2)}> Outils 2 </Button></div>
        <div><Button onClick={() => setToolSelected(3)}> Outils 3 </Button></div>
      </Popover>
    </div>
  );
}

export default App;
