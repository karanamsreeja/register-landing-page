
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from "../images/logo.svg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Topbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className='nav-bg'>
        <Toolbar disableGutters >
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
        
          >
         <img src={logo} alt=""     style={{overFlow:'visible'}}/>
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{color:'#000'}}/>
            </IconButton>
            <Menu className="nav-bg"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

                      {/* <Button sx={{ my: 1, color: '#000', display: 'block' }} className="fw6 f12 text-trans" onClick={() => window.location.href='./'}>
               Home
              </Button> */}
          <Button sx={{ my: 1, color: '#000', display: 'block' }} className="fw6 f12 text-trans">
          <div class="dropdown">
    <button class="dropbtn nav-text">About Us 
    <KeyboardArrowDownIcon style={{fontSize:'13px',marginBottom:'-2px'}}/>
    </button>
    <div class="dropdown-content nav-text">
      <a href="./company">Our Company</a>
      <a href="./team">Our Team</a>
      <a href="./experts">Our Experts</a>
    </div>
  
</div>
              </Button>
         
              <Button sx={{ my: 1, color: '#000', display: 'block' }} className="nav-text"  onClick={() => window.location.href='./learn'}>
               Learn
              </Button>
              <Button sx={{ my: 1,color: '#000', display: 'block' }} className="nav-text" onClick={() => window.location.href='./services'}>
               Our Service
              </Button>
              <Button sx={{ my: 1, color: '#000', display: 'block' }} className="nav-text" onClick={() => window.location.href='./stories'}>
              Success Stories
              </Button>
              
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              md:2,
              mr: 2,
              display: { xs: 'flex', md: 'none' },
           
            }}
          >
            <img src={logo} alt=""/>
          </Typography>
        
          <Box sx={{ flexGrow: 1 , display: { xs: 'none', md: 'flex', justifyContent: "space-evenly"} }} >
          {/* <Button sx={{ my: 1, color: '#000', display: 'block' }} className="fw6 f12 text-trans" onClick={() => window.location.href='./'}>
               Home
              </Button> */}
          <Button sx={{ my: 1, color: '#000', display: 'block' }} className="fw6 f12 text-trans">
          <div class="dropdown">
    <button class="dropbtn nav-text">About Us 
    <KeyboardArrowDownIcon style={{fontSize:'13px',marginBottom:'-2px'}}/>
    </button>
    <div class="dropdown-content nav-text">
      <a href="./company">Our Company</a>
      <a href="./team">Our Team</a>
      <a href="./experts">Our Experts</a>
      <a href="./get-started">Get Started</a>
    </div>
  
</div>
              </Button>
         
              <Button sx={{ my: 1, color: '#000', display: 'block' }} className="nav-text"  onClick={() => window.location.href='./learn'}>
               Learn
              </Button>
              <Button sx={{ my: 1,color: '#000', display: 'block' }} className="nav-text" onClick={() => window.location.href='./services'}>
               Our Service
              </Button>
              <Button sx={{ my: 1, color: '#000', display: 'block' }} className="nav-text" onClick={() => window.location.href='./stories'}>
              Success Stories
              </Button>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }}}>
          <Button variant="contained" sx={{m:1}} style={{borderRadius:'20px',backgroundColor:'#E1AB3B',textTransform:'none'}} onClick={() => window.location.href='./get-started'}>
          Get Started
          </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Button variant="" className="nav-text" sx={{m:1}} >
            <ShoppingCartIcon style={{marginRight:'20px'}}/>
            <span >Login</span> 
          </Button>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Topbar;
