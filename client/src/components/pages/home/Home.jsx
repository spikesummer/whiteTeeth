import React from "react";
import { Container, Main } from './styled';
import Topbar from "../topBar/Topbar";
import Calendario from "../calendario/Calendario";

const Home = props => {
    return (
        <Container>
            <Topbar/>
            <Main>
                <Calendario/>                
            </Main>
        </Container>
    )
}

export default Home;