import React from "react";
import Topbar from "../topBar/Topbar";
import { Container, Main } from './styled';

const Pesquisar = props => {
    return (
        <Container>
            <Topbar/>
            <Main>
                <h2>Pesquisar</h2>
            </Main>
        </Container>
    )
}

export default Pesquisar;