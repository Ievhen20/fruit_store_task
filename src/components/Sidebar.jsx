import React from 'react';
import { useNavigate } from 'react-router';
import { Drawer, List, ListItem, ListItemText, Divider, Button } from '@mui/material';

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  }

  const goToProfile = () => {
    navigate('goToProfile');
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        <ListItem button>
          {/* <ListItemText primary="Dashboard" /> */}
          <Button color='inherit' onClick={goToDashboard}>Dashboard</Button>
        </ListItem>
        <ListItem button>
          {/* <ListItemText primary="Profile" /> */}
          <Button color='inherit' onClick={goToProfile}>Profile</Button>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
