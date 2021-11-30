import React from 'react';
import Carrinho from './components/Carrinho';
import Cards from './components/Cards';
import Filtro from './components/Filtro';
import styled from 'styled-components';

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: space-around;
`;

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        nome: 'Produto 1',
        preco: 100.0,
        foto: 'https://picsum.photos/200/300?random=2',
      },
      {
        id: 2,
        nome: 'Produto 2',
        preco: 200.0,
        foto: 'https://picsum.photos/200/300?random=1',
      },
      {
        id: 3,
        nome: 'Produto 3',
        preco: 300.0,
        foto: 'https://picsum.photos/200/300?random=3',
      },
      {
        id: 4,
        nome: 'Produto 4',
        preco: 400.0,
        foto: 'https://picsum.photos/200/300?random=4',
      },
      {
        id: 5,
        nome: 'Produto 5',
        preco: 500.0,
        foto: 'https://picsum.photos/200/300?random=5',
      },
      {
        id: 6,
        nome: 'Produto 6',
        preco: 600.0,
        foto: 'https://picsum.photos/200/300?random=6',
      },
    ],
    produtosNoCarrinho: [
      {
        id: 6,
        nome: 'Produto 6',
        preco: 600.0,
        foto: 'https://picsum.photos/200/300?random=6',
      },
      {
        id: 5,
        nome: 'Produto 5',
        preco: 500.0,
        foto: 'https://picsum.photos/200/300?random=5',
      },
    ],
    total: 1100,
  };

  adicionarAoCarrinho = (produtoId) => {
    const novoProdutoCarrinho = this.state.produtos.find(
      (produto) => produtoId === produto.id
    );
    const novosProdutosCarrinho = [
      ...this.state.produtosNoCarrinho,
      novoProdutoCarrinho,
    ];
    const Total = novosProdutosCarrinho
      .map((produto) => produto.preco)
      .reduce((total, elemento) => total + elemento);

    this.setState({ produtosNoCarrinho: novosProdutosCarrinho, total: Total });
  };

  render() {
    return (
      <Body>
        <Filtro />
        <Cards
          produtos={this.state.produtos}
          adicionarAoCarrinho={this.adicionarAoCarrinho}
        />
        <Carrinho
          produtosCarrinho={this.state.produtosNoCarrinho}
          total={this.state.total}
        />
      </Body>
    );
  }
}

export default App;
