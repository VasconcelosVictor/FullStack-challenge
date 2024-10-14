import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import ProductTable from '../components/Table/ProductTable';
import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/products/')
      .then(response => setProdutos(response.data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  const handleAddProduct = () => {
    navigate('/adicionar-produto');
  };

  const fetchProducts = () => {
    axios.get('http://localhost:8000/api/v1/products/')
      .then(response => setProdutos(response.data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/v1/products/${id}/`)
      .then(() => {
        console.log('Produto excluído com sucesso');
        fetchProducts(); 
      })
      .catch(error => console.error('Erro ao excluir produto:', error));
  };

  return (
    <Container sx={{ mt: 10 }} >
        <Header onAddProduct={handleAddProduct} />
        <Filter setFilteredProducts={setProdutos} />
        <ProductTable produtos={produtos} onDelete={handleDelete} />
        <Footer></Footer>
  </Container>
  );
};

export default Home;
