import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: solid 1px black;
  margin: 10px;
  padding: 10px;
`;

const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

class Carrinho extends React.Component {
  render() {
    return (
      <Container>
        <h4>Carrinho</h4>
        {this.props.produtosCarrinho.map((produto) => (
          <ContainerFlex>
            <p>1x</p>
            <p>{produto.nome}</p>
            <p>R$ {produto.preco},00</p>
          </ContainerFlex>
        ))}
        <p>Valor Total: R$ {this.props.total},00</p>
      </Container>
    );
  }
}

export default Carrinho;
