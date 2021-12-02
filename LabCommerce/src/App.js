import React from 'react';
import Carrinho from './components/Carrinho';
import Cards from './components/Cards';
import Filtro from './components/Filtro';
import styled from 'styled-components';
import Produtos from './components/Produtos';

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: space-around;
`;

class App extends React.Component {
  state = {
    valorMinimo: 100,
    valorMaximo: 1000,
    peloNome: 'Produto',
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
        quantidade: 1,
      },
      {
        id: 5,
        nome: 'Produto 5',
        preco: 500.0,
        foto: 'https://picsum.photos/200/300?random=5',
        quantidade: 1,
      },
    ],
    total: 1100,
  };

  onChangeValorMinimo = (e) => {
    this.setState({ valorMinimo: e.target.value });
  };

  onChangeValorMaximo = (e) => {
    this.setState({ valorMaximo: e.target.value });
  };

  onChangePeloNome = (e) => {
    this.setState({ peloNome: e.target.value });
  };

  adicionarAoCarrinho = (produtoId) => {
    const produtoExistenteCarrinho = this.state.produtosNoCarrinho.find(
      (produto) => produtoId === produto.id,
    );

    if (produtoExistenteCarrinho) {
      const novosProdutosCarrinho = this.state.produtosNoCarrinho.map((produto) => {
        if (produtoId === produto.id) {
          return { ...produto, quantidade: produto.quantidade + 1 };
        }
        return produto;
      });

      const total = novosProdutosCarrinho.reduce(
        (total, produto) => total + produto.preco * produto.quantidade,0
        );

      this.setState({
        produtosNoCarrinho: novosProdutosCarrinho,
        total: total,
      });
    } else {
      const novoProdutoCarrinho = this.state.produtos.find((produto) => produtoId === produto.id);

      const novosProdutosCarrinho = [
        ...this.state.produtosNoCarrinho,
        { ...novoProdutoCarrinho, quantidade: 1 },
      ];

      const total = novosProdutosCarrinho.reduce((total, produto) => total + produto.preco, 0);

      this.setState({
        produtosNoCarrinho: novosProdutosCarrinho,
        total: total,
      });
    }
  };

  render() {
    return (
      <Body>
        <Filtro />
        <Cards produtos={this.state.produtos} adicionarAoCarrinho={this.adicionarAoCarrinho} />
        <Carrinho produtosCarrinho={this.state.produtosNoCarrinho} total={this.state.total} />

        <Produtos
          produtos={this.state.produtos}
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          peloNome={this.state.peloNome}
        />
      </Body>
    );
  }
}

export default App;
