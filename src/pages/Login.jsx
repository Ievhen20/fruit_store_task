import React, { useState } from 'react';
import { useNavigate } from 'react-router';
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

const Login = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const handleLogin = () => {
    let validationErrors = { email: '', password: '' };

    // Email validation
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!email.includes('@')) {
      validationErrors.email = 'Email must contain "@" symbol';
    }

    // Password validation
    if (!password) {
      validationErrors.password = 'Password is required';
    }

    // If there are errors, update state and prevent login
    if (validationErrors.email || validationErrors.password) {
      setError(validationErrors);
      return;
    }

    navigate('/home')
  
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
            Log In
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={textFieldStyles}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {error.email && <Typography color="error" sx={{ mt: '0', mb: '0' }}>{error.email}</Typography>}
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              InputLabelProps={{ shrink: true }}
              sx={textFieldStyles}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {error.password && <Typography color="error">{error.password}</Typography>}
            <Button
              color="info"
              size="medium"
              sx={{
                mb: 2,
                ml: 2,
                backgroundColor: '#1976d2',
                color: 'white',
                '&:hover': { backgroundColor: '#1565c0' },
              }}
              onClick={handleLogin} // Remove parentheses so it's passed as a function reference
            >
              Log In
            </Button>
          </Box>
        </Box>
      </HeroBox>
      <Footer />
    </Box>
  );
};

export default Login;
