import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';

// Define the common styles for the TextField component
const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
    },
    '&:hover fieldset': {
      borderColor: '#1976d2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1976d2',
    },
  },
};

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

const SignUp = () => {
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
            sx={{
              backgroundColor: '#00bfff',
              mb: 3,
              padding: '12px',
              borderRadius: '4px',
              color: 'white',
            }}
          >
            Create your account
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={textFieldStyles}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={textFieldStyles}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={textFieldStyles}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              InputLabelProps={{ shrink: true }}
              sx={textFieldStyles}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              type="password"
              InputLabelProps={{ shrink: true }}
              sx={textFieldStyles}
            />
            <Button color="info" size="medium" sx={{ mb: 2, ml: 2, backgroundColor: '#1976d2', color: 'white', '&:hover': { backgroundColor: '#1565c0', }, }}>
              Submit
            </Button>
          </Box>
        </Box>
      </HeroBox>
      <Footer />
    </Box>
  );
};

export default SignUp;
