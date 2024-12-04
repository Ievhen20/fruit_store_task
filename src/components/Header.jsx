// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Header = ({ onToggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Function to handle scroll event
  const handleScroll = () => {
    // When the scroll position is greater than 50px, set the scrolled state to true
    if (window.scrollY > 75) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToSignin = () => {
    navigate('/login')
  }

  const goToSignup = () => {
    navigate('/signup');
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        transition: 'all 0.3s ease',
        background: scrolled ? 'white' : 'black',
        opacity: scrolled ? '0.7' : '1',
        boxShadow: scrolled ? 3 : 0,
        padding: scrolled ? '0px 0' : '6px 0',
        zIndex: 1100, // Ensure the header is on top
      }}
    >
      <Toolbar>
        <Button color="inherit" onClick={onToggleSidebar}>
          <MenuIcon sx={{ color: 'gray' }} />
        </Button>
        <Typography variant="h6" sx={{ flexGrow: 1, margin: '0' }}>
          <Box
            sx={{
              width: 120,
              height: 40,
              backgroundImage: 'url(/spotify-light.svg)', // If image is in the 'public' folder
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
            }}
          >
          </Box>
        </Typography>
        <Button variant='outlined' size="small" color='white' sx={{ fontSize: '12px', padding: 0, margin: 1, background: 'green' }} onClick={goToSignin}>Sign In</Button>
        <Button variant='outlined' size="small" sx={{ color: 'gray', fontSize: '12px', padding: 0, margin: 1 }} onClick={goToSignup}>Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
