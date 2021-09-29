import React from 'react';
import { Container, Logo } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import Menu from './menu/Menu';

const LeftSide = (props) => {
 
  return(
    <Container>
      
      <Logo>
        <div className="logo"><FontAwesomeIcon icon={faTooth} /></div>
        <h1>whiteteeth</h1>
        <span>Consultório Odontológico</span>
      </Logo>   
      
      <Menu/>
          
    </Container>
  );
}

export default LeftSide;