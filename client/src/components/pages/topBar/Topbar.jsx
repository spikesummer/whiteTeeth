import React from "react";
import { Container } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Topbar = props => {
    return (
        <Container>
            <div className="topbar">
                <div className="topbar-body">
                    <span className="user">Adriano</span>
                    <span className="icon"><FontAwesomeIcon icon={faUserCircle} /></span>
                    <span className="notification"><FontAwesomeIcon icon={faBell} /><span>1</span></span>
                    <a href="#" className="logout">
                        <span className="icon"><FontAwesomeIcon icon={faSignOutAlt} /></span>
                        <span className="text">Sair</span>
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Topbar;