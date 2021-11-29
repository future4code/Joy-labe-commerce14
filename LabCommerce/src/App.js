import React from 'react';
import Carrinho from './components/Carrinho';
import Cards from './components/Cards';
import Filtro from './components/Filtro';
import styled from 'styled-components';


const Body = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: 1fr 3fr 1fr;
justify-content: space-around;
`

class App extends React.Component {
  render(){
    return (
      <Body>
        <Filtro />
        <Cards/>
        <Carrinho />
      </Body>
  );
  }
}

export default App;
