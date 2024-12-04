import { Box, Card, CardMedia, CardContent, Grid, Typography, Button, IconButton } from '@mui/material';
import { ShoppingCart, Visibility } from '@mui/icons-material';
import { fruits } from '../utils/constants';

const LandingCard = () => {
  return (
    <Grid container spacing={2} sx={{ margin: '0 15% 10%' }}>
      {/* Map through the fruit array and render a card for each item */}
      {fruits.map(fruit => (
        <Grid item xs={12} sm={6} md={3} key={fruit.id}>
          <Card sx={{
            maxWidth: 345,
            height: '100%', // Ensure card has a fixed height
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column', // Allow content to be stacked vertically
            position: 'relative',
            '&:hover': {
              '& .overlay': {
                opacity: 0.6,
              },
            },
          }}>
            {/* Image and overlay */}
            <Box sx={{
              position: 'relative',
              height: 150,  // Set a fixed height for image
              overflow: 'hidden' // Ensure image doesn't overflow
            }}>
              <Box
                component="img"
                src={fruit.src}
                alt={fruit.name}
                sx={{
                  width: '100%', // Image will fill the container's width
                  height: '100%', // Image will fill the container's height
                  objectFit: 'cover', // Ensure the image covers the entire container without distortion
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
              {/* Gray Overlay with Icons */}
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton color="primary">
                    <ShoppingCart sx={{ fontSize: 30 }} />
                  </IconButton>
                  <IconButton color="primary">
                    <Visibility sx={{ fontSize: 30 }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            {/* Card Content */}
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Flex container for fruit name and price */}
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>
                  {fruit.name}
                </Typography>

                {/* Fruit price in Box */}
                <Box sx={{ color: 'orange' }}>
                  {fruit.price} $
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LandingCard;
