import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductForm from './components/Form/ProductForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/adicionar-produto" element={<ProductForm />} />
      </Routes>
    </Router>
  );
};

export default App;
