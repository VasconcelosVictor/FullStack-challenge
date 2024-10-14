import React, { useState} from 'react';
import { TextField, Button, Grid, Typography, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const novoProduto = {
      name,
      description,
      color,
      category,
      price,
    };

    axios.post('http://localhost:8000/api/v1/products/', novoProduto)
      .then(response => {
        console.log('Produto adicionado com sucesso:', response.data);
        navigate('/');
        
      })
      .catch(error => console.error('Erro ao adicionar produto:', error));
  };

  return (
    <Container sx={{ mt: 10 }} >
        <form onSubmit={handleSubmit}>
      <Typography variant="h4" component="h1" gutterBottom>
        Cadastro de Produto
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Descrição"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Cor"
            variant="outlined"
            fullWidth
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Categoria</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Categoria"
              required
            >
              <MenuItem value="">
                <em>Selecione uma Categoria</em>
              </MenuItem>
              <MenuItem value="smartphones">Smartphones</MenuItem>
              <MenuItem value="eletroportateis">Eletroportáteis</MenuItem>
              <MenuItem value="moveis">Móveis</MenuItem>
              <MenuItem value="geladeiras">Geladeiras</MenuItem>
              <MenuItem value="eletronicos">Eletrônicos</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Preço"
            variant="outlined"
            fullWidth
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Adicionar Produto
      </Button>
    </form>

    </Container>
    
  );
};

export default ProductForm;
