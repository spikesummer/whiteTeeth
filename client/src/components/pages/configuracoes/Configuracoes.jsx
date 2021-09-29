import React from "react";
import Topbar from "../topBar/Topbar";
import { Container, Main } from './styled';

const Finances = props => {
    return (
        <Container>
            <Topbar/>
            <Main>
                <h2>Configurações</h2>
            </Main>
        </Container>
    )
}

export default Finances;