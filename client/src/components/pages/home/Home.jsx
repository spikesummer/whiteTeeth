import React from "react";
import { Container, Main } from './styled';
import Topbar from "../topBar/Topbar";
import Calendario from "../calendario/Calendario";
import AgendaDoDia from "../agendaDoDia/AgendaDoDia";

const Home = props => {
    return (
        <Container>
            <Topbar/>
            <Main>
                <Calendario/>  
                <AgendaDoDia/>
            </Main>
        </Container>
    )
}

export default Home;