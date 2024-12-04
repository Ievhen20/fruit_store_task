import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#282a35', color: 'white', padding: 0, bottom: 0, width: '100%' }}>
      <Grid container sx={{ padding: '40px 18%' }}>
        <Grid xs={12} sm={6} md={3}>
          <Typography>Footer content</Typography>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography>Footer content</Typography>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography>Footer content</Typography>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Typography>Footer content</Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" color="white" align="center" sx={{ paddingBottom: '30px' }}>
        © 2024 My Application. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
