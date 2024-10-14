import React from 'react';
import { Typography, Button, Grid } from '@mui/material'; // Importando Grid 1
import { Add as AddIcon } from '@mui/icons-material';

const Header = ({ onAddProduct }) => {
  return (
    <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
      <Typography variant="h4" component="h1">
        Lista de Produtos
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={onAddProduct}
      >
        Adicionar Produto
      </Button>
    </Grid>
  );
};

export default Header;
