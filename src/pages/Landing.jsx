import React, { useState } from 'react';
import { Box, Grid, Typography, Button, IconButton, Tooltip, TextField } from '@mui/material';
import { styled } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import CommentIcon from '@mui/icons-material/Comment';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';
import LandingCard from '../components/LandingCard';
import LandingChart from '../components/LandingChart';
import LandingTable from '../components/LandingTable';

const HeroBox = styled(Box)({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
  // background: 'linear-gradient(-45deg, #0c9ed4 0%, #51c9f5 100%)',
  padding: 2,
  margin: '0 12%',
  padding: '12px 25px',
  position: 'relative',
});

const LandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const toggleSidebar = (theme) => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle change in search input
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setIsSearching(event.target.value.length > 0); // Show clear icon when typing
  };

  // Handle search (You can replace this with actual search functionality)
  const handleSearch = () => {
    if (searchText) {
      console.log('Search for:', searchText);
      // Implement actual search logic here
    }
  };

  // Handle clear search input
  const handleClearSearch = () => {
    setSearchText('');
    setIsSearching(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
      <HeroBox>
        <LanguageRoundedIcon sx={{ fontSize: "80px" }} color="white" />
        <Typography variant="h2" sx={{ fontWeight: 'bold', color: "black", mb: 2 }}>
          Welcome to Nature's Bounty – Freshness Delivered Right to Your Door
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }} color='gray'>
          Explore a wide range of the finest fruits, handpicked for quality, and delivered with care.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          {/* Back to shopping button */}
          <IconButton color="secondary" onClick={() => window.location.href = '/shop'} sx={{ fontSize: '14px' }}>
            <ShoppingCartIcon />
            Back to Shopping
          </IconButton>

          {/* Search Input */}
          <Box sx={{
            display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '5px 10px', margin: '0 12px', width: '250px'
          }}>
            <IconButton sx={{ color: 'gray', fontSize: '18px' }} onClick={handleSearch} disabled={!searchText}>
              {isSearching ? <ClearIcon sx={{ fontSize: '18px' }} onClick={handleClearSearch} /> : <SearchIcon sx={{ fontSize: '18px' }} />}
            </IconButton>
            <TextField
              variant="standard"
              placeholder="Search products..."
              size="small"
              value={searchText}
              onChange={handleSearchChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}  // Trigger search on Enter key press
              sx={{
                input: {
                  fontSize: '14px',
                },
                '& .MuiInput-root': {
                  padding: '0',
                },
                '& .MuiInput-underline:before': {
                  borderBottom: 'none', // Removes the underline
                },
                '& .MuiInput-underline:after': {
                  borderBottom: 'none', // Removes the underline
                },
              }}
            />
          </Box>

          {/* Customer Reviews */}
          <Tooltip title="Leave a Comment">
            <IconButton color="primary" sx={{ fontSize: '14px' }}>
              <CommentIcon />
              Customer Reviews
            </IconButton>
          </Tooltip>
        </Box>
        <LandingCard sx={{ mb: '80px' }} />

        <Grid container spacing={2} sx={{ margin: '0 16%' }}>
          <Grid item xs={6} md={6} >
            {/* Chart */}
            <LandingChart />
          </Grid>
          <Grid item xs={6} md={6} sx={{
              display: 'flex',
              flexDirection: 'column',
              pb: 4,
              backgroundImage: 'url("https://miro.medium.com/v2/resize:fit:679/1*h7IYWJLOHmnw48dwoYZ7LQ.png")',
              backgroundSize: '80% 80%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              '@media (max-width: 600px)': {
                backgroundImage: 'url("https://via.placeholder.com/600x400")', // Mobile version of the image
              }
            }}
          >
            <Typography variant="h6" sx={{ color: 'white', textAlign: 'center', flexGrow: 1 }}>
              payment
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ margin: '0 16%', display: 'flex', alignItems: 'stretch', mb: '120px' }}>
          <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'column' }}>
            <LandingTable />
          </Grid>
        </Grid>
      </HeroBox>
      <Footer />
    </Box>
  );
};

export default LandingPage;
