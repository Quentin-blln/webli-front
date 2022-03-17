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
import Link from '@mui/material/Link';
import { grey } from '@mui/material/colors';



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
      <AppBar position="static" style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,140,1) 50%, rgba(0,0,0,1) 100%)' }}>
        <a href='#' onClick={()=>{ setToolSelected(0)}}><img id="logo" src="Webli_v2.png" alt="logo"/></a>
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
            <Link sx={{ color:'white'}} href="#" underline="none" onClick={()=>{ setToolSelected(0)}}>
            WEBLI
            </Link>
            </Typography>
          </Toolbar>
        </AppBar>
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
        <div><Button onClick={() => setToolSelected(1)} id='buttonfill'> JOHN THE RIPPER </Button></div>
        <div><Button onClick={() => setToolSelected(2)} id='buttonfill'> NMAP </Button></div>
        <div><Button onClick={() => setToolSelected(3)} id='buttonfill'> DDOS </Button></div>
        <div><Button onClick={() => setToolSelected(4)} id='buttonfill'> HPING3 </Button></div>
        <div><Button onClick={() => setToolSelected(5)} id='buttonfill'> FIERCE </Button></div>
        <div><Button onClick={() => setToolSelected(6)} id='buttonfill'> WPSCAN </Button></div>
      </Popover>
    </div>
  );
}

export default App;
