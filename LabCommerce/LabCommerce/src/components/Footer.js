import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
background: SlateBlue;
display: grid;
grid-area: footer;
width: 100wh;
height:80px;` 

const Redes = styled.p`
font-size: 25px;
margin-top: 20px;
text-align: center;
font-weight: bold;
` 


export default class Footer extends React.Component {

	render() {

		return (
			<FooterContainer>
				<Redes>Matheus Lima | João Lucas | Eli Tosta
                    <br></br>
                   
                </Redes>
			</FooterContainer>
        )}}