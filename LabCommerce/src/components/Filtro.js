import React from "react";
import styled from "styled-components"  

const Container = styled.div`
display:flex;
flex-direction: column;
border: solid 1px black;
margin: 10px;
padding: 10px;
`

const Titulo = styled.h2`
text-align: center;
margin-bottom: 1em;
`

const InputTag = styled.div`
margin: 10px 0;
`

class Filtro extends React.Component {
    render() {

        return (
            <Container>
                <Titulo> Filtros </Titulo>
                <InputTag>
                    <label>Valor Mínimo </label><br />
                    <input type="number" />
                </InputTag>
                <InputTag>
                    <label>Valor Maximo </label><br />
                    <input type="number" />
                </InputTag>
                <InputTag>
                    <label>Nome do produto </label><br />
                    <input type="text" />
                </InputTag>
            </Container>)
        }
}
export default Filtro; 