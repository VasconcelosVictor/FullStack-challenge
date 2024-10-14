import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import Swal from 'sweetalert2';

const ProductTable = ({ produtos, onDelete }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Tem certeza que vai excluir este Item?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
      }
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="tabela de produtos">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Preço Promocional</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos.map((produto) => (
            <TableRow key={produto.id}>
              <TableCell>{produto.id}</TableCell>
              <TableCell>{produto.name}</TableCell>
              <TableCell>R$ {produto.price}</TableCell>
              <TableCell>{produto.description}</TableCell>
              <TableCell>{produto.category}</TableCell>
              <TableCell>R$ {produto.promotional_price}</TableCell>
              <TableCell>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={() => handleDelete(produto.id)}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
