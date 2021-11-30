import React from "react";

class Produtos extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.produtos.foto} /> 
                <div>
                    <p>{this.props.produtos.nome}</p>
                    <p>R$ {this.props.produtos.preco},00 </p>
                    <button> Adicionar ao carrinho </button>
                </div>
            </div>)
        }
}

export default Produtos;