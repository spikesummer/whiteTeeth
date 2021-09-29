import React from "react";
import { Container, Main } from './styled';
import Topbar from "../topBar/Topbar";

const Agenda = props => {
    return (
        <Container>
            <Topbar/>
            <Main>
                <h2>Agenda</h2>
            </Main>
        </Container>
    )
}

export default Agenda;