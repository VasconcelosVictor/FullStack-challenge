import React, { useState } from 'react';
import axios from 'axios';
import { TextField, MenuItem, Button, Grid } from '@mui/material';

const Filter = ({ setFilteredProducts }) => {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [ordem, setOrdem] = useState('name'); 

  const handleFilter = async () => {
    try {
      let query = `?search=${nome}&ordering=${ordem}`;
      if (categoria) {
        query += `&search=${categoria}`;
      }

      const response = await axios.get(`http://localhost:8000/api/v1/products/${query}`);
      
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar os produtos", error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          variant="outlined"
          margin="normal"
        />
      </Grid>
      
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Categoria"
          select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          variant="outlined"
          margin="normal"
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          <MenuItem value="smartphones">Eletroportáteis</MenuItem>
          <MenuItem value="moveis">Móveis</MenuItem>
          <MenuItem value="eletronicos">Geladeiras</MenuItem>
          <MenuItem value="eletroportateis">Smartphones</MenuItem>
          <MenuItem value="geladeiras">Eletrônicos</MenuItem>
        </TextField>
      </Grid>
      
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          label="Ordem"
          select
          value={ordem}
          onChange={(e) => setOrdem(e.target.value)}
          variant="outlined"
          margin="normal"
        >
          <MenuItem value="name">Nome (A-Z)</MenuItem>
          <MenuItem value="-name">Nome (Z-A)</MenuItem>
        </TextField>
      </Grid>
  
      <Grid item xs={12} >
        <Button variant="contained" color="primary" onClick={handleFilter}>
          Filtrar
        </Button>
      </Grid>
    </Grid>
  );
}

export default Filter;
