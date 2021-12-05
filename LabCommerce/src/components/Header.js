import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
background: SlateBlue;
display: grid;
grid-area: header;
width: 100wh;
height:80px;
`

const Logo = styled.p`
font-size: 30px;
margin-top: 17px;
padding: 0 100px;
font-weight: bold;
`

const Login = styled.p`
font-size: 30px;
margin-top: -75px;
margin-left: 1700px;
`




export default class Header extends React.Component {

	render() {

		return (
			<HeaderContainer>
				<Logo>LabCommerce</Logo>
				<Login><button>LOGIN</button></Login>
			</HeaderContainer>
        )}}