import React from 'react';
import styled from 'styled-components';
import Produtos from './Produtos';

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 10px;
`;

const ListaProdutos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 30px;
  padding: 5px;
  margin: 10px;
`;

const Container = styled.div`
  border: solid 1px black;
  margin: 10px;
  padding: 10px;
`;

class Cards extends React.Component {

  listaFiltrada = () => {
    return this.props.produtos
    
  }
  render() {
    const listaComFiltro = this.listaFiltrada ()
    return (
      <Container>
        <Nav>
          <p>Produtos disponiveis:{listaComFiltro.length}</p>
          <div>
            <label>Ordenar por ordem:</label>
            <select>
            <option >Crescente</option>
            <option >Decrescente</option>
            </select>
          </div>
        </Nav>
        <ListaProdutos>
          
          {this.props.produtos.map((produto) => (
            <Produtos
              key={produto.id}
              produtos={produto}
              adicionarAoCarrinho={this.props.adicionarAoCarrinho}
            />
          ))}
        </ListaProdutos>
        
      </Container>
    );
  }
}

export default Cards;
