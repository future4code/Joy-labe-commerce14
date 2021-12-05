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
  margin-bottom: 2px;
`;

const Container = styled.div`
  border: solid 1px black;
  margin: 10px;
  padding: 10px;
 
`;

class Cards extends React.Component {
  state = {
    sort: 'DECRESCENTE'
  }
  listaFiltrada = () => {
    return this.props.produtos
      .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.preco - b.preco : b.preco - a.preco)
      .filter((produto) => produto.nome.toLowerCase().includes(this.props.peloNome.toLowerCase()))
      .filter((produto) => produto.preco >= this.props.valorMinimo || this.props.valorMinimo === '')
      .filter((produto) => produto.preco <= this.props.valorMaximo || this.props.valorMaximo === '' );
      
      
  };

  onChangeSort = (event) => {
    this.setState({sort: event.target.value})
  }
  render() {
    
    const listaComFiltro = this.listaFiltrada();
    return (
      <Container>
        <Nav>
          <p>Produtos disponiveis:{listaComFiltro.length}</p>
          <div>
            <label>Ordenar por ordem:</label>
            <select value={this.state.sort} onChange={this.onChangeSort}>
            <option value={'CRESCENTE'}>Crescente</option>
            <option value={'DECRESCENTE'}>Decrescente</option>
            </select>
          </div>
        </Nav>
        <ListaProdutos>
          {listaComFiltro.map((produto) => (
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
