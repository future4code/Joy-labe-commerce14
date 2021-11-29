import React from "react";
import styled from "styled-components"  

class Carrinho extends React.Component {
    render() {
        const Container = styled.div`
            border: solid 1px black;
            margin: 10px;
            padding: 10px;`

        return (
            <Container>
                <h4>Carrinho</h4>
                <p> Valor Total:</p>
            </Container>)
        }
}

export default Carrinho; 