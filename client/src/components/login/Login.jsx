import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import { Container } from './styled'

// === FUNÇÕES ===
async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
// ===================================

export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <Container>
        
        <form onSubmit={handleSubmit}>
          <div className="logo"><FontAwesomeIcon icon={faTooth} /></div>
          <h1>whiteteeth</h1>
          <span>Consultório Odontológico</span>
          <input type="text" placeholder="Usuário" onChange={e => setUserName(e.target.value)} required="requered" />
          <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} required="requered"/>
          <button type="submit">entrar</button>
        </form>
     
    </Container>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}