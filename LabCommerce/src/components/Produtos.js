import React from "react";

class Produtos extends React.Component {
    render() {
        return (
            <div>
                <img src="https://picsum.photos/seed/picsum/200/300" /> 
                <div>
                    <p> Produto Exemplo </p>
                    <p> R$777,00 </p>
                    <button> Adicionar ao carrinho </button>
                </div>
            </div>)
        }
}

export default Produtos;