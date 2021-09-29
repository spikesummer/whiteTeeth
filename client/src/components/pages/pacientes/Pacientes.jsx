import React from "react";
import { Container, Main } from './styled';
import Topbar from "../topBar/Topbar";

const Pacientes = props => {
    return (
        <Container>
            <Topbar/>
            <Main>
                <h2>Pacientes</h2>
            </Main>
        </Container>
    )
}

export default Pacientes;