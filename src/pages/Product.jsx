import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';

const HeroBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: 'black',
  padding: theme.spacing(2),
  margin: '0 12%',
  position: 'relative',
  flex: 1,
  [theme.breakpoints.down('sm')]: {
    margin: '0 5%',
    padding: theme.spacing(1),
  },
}));

const Product = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
      <HeroBox>
        <Box sx={{ width: '100%', maxWidth: 500, margin: 'auto' }}>
          <Typography
            variant="h5"
            sx={{ backgroundColor: '#00bfff', mb: 3, padding: '12px', borderRadius: '4px', color: 'white' }}
          >
            Product Page
          </Typography>
        </Box>
      </HeroBox>
      <Footer />
    </Box>
  );
};

export default Product;
