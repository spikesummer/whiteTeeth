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
                <div>
                    <h1>Agenda do dia</h1>
                    <div>
                        <div>
                            <span>8:00</span>
                            <h2>Cliente 01</h2>
                            <h3>Dr Carlos</h3>
                        </div>
                        <div>
                            <span>9:00</span>
                            <h2>Cliente 01</h2>
                            <h3>Dr Carlos</h3>
                        </div>
                        <div>
                            <span>10:00</span>
                            <h2>Cliente 01</h2>
                            <h3>Dr Carlos</h3>
                        </div>
                        <div>
                            <span>11:00</span>
                            <h2>Cliente 01</h2>
                            <h3>Dr Carlos</h3>
                        </div>
                        <div>
                            <span>12:00</span>
                            <h2>Cliente 01</h2>
                            <h3>Dr Carlos</h3>
                        </div>
                        <div>
                            <span>13:00</span>
                            <h2>Cliente 01</h2>
                            <h3>Dr Carlos</h3>
                        </div>
                        <div>
                            <span>14:00</span>
                            <h2>Cliente 01</h2>
                            <h3>Dr Carlos</h3>
                        </div>
                        <div>
                            <span>15:00</span>
                            <h2>Cliente 01</h2>
                            <h3>Dr Carlos</h3>
                        </div>
                        <div>
                            <span>16:00</span>
                            <h2>Cliente 01</h2>
                            <h3>Dr Carlos</h3>
                        </div>
                    </div>  
                </div>              
            </Main>
        </Container>
    )
}

export default Home;