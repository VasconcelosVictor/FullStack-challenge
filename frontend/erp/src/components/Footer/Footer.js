import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        position: 'relative', 
        bottom: 0, 
        textAlign: 'center', 
        py: 2, 
        bgcolor: 'primary.main', 
        color: 'white' 
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Victor Vasconcelos
      </Typography>
    </Box>
  );
};

export default Footer;
