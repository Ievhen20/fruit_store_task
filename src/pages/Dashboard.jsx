import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';
import { styled } from '@mui/system';

const HeroBox = styled(Box)({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
  padding: 2,
  position: 'relative',
});

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (theme) => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
      <HeroBox>
        <LanguageRoundedIcon sx={{ fontSize: "80px" }} color="white" />
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: "black", mb: 2 }}>
          Welcome to My Application
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }} color='gray'>
          A modern and responsive solution for all your needs.
        </Typography>
      </HeroBox>
      <Footer />
    </Box>
  );
};

export default Dashboard;
