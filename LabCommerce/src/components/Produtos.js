import React from 'react';

class Produtos extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.produtos.foto} alt="imagem" />
        <div>
          <p>{this.props.produtos.nome}</p>
          <p>R$ {this.props.produtos.preco},00 </p>
          <button onClick={() => this.props.adicionarAoCarrinho(this.props.produtos.id)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default Produtos;
