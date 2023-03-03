import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../login/Login';
import useToken from './useToken';
import { Container } from './styled';
import Routes from './Routes';
import LeftSide from '../leftSide/LeftSide';

function App() {
    const { token, setToken } = useToken();
   
    if(!token) {
        return <Login setToken={setToken} />
    }
   
    return (
       <Container>
           <BrowserRouter>
                <LeftSide/>
                <Routes/>
           </BrowserRouter>    
       </Container>
    );
}

export default App;