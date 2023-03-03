import React, { useState } from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyBillAlt, faCalendarAlt, faUserEdit, faSearch, faCogs, faUsers } from '@fortawesome/free-solid-svg-icons';

const Menu = (props) => {
   const [active, setActive] = useState(1);
  
   return(
        <Container>
            <ul>
                <li className={active===1?'active':''} onClick={()=>{setActive(1)}}>
                    <b></b>
                    <b></b>
                    <Link to="/" >
                        <span className="icon"> <FontAwesomeIcon icon={faHome} /> </span>
                        <label> Principal </label>
                    </Link>
                </li>
                <li className={active===2?'active':''} onClick={()=>{setActive(2)}}>
                    <b></b>
                    <b></b>
                    <Link to="/agenda">
                        <span className="icon"> <FontAwesomeIcon icon={faCalendarAlt} /> </span>
                        <label> Agendamento </label>
                    </Link>
                </li>
                <li className={active===3?'active':''} onClick={()=>{setActive(3)}}>
                    <b></b>
                    <b></b>
                    <Link to="/pacientes"> 
                        <span className="icon"> <FontAwesomeIcon icon={faUserEdit} /> </span>
                        <label> Pacientes </label>
                    </Link>
                </li>
                <li className={active===4?'active':''} onClick={()=>{setActive(4)}}>
                    <b></b>
                    <b></b>
                    <Link to="/funcionarios"> 
                        <span className="icon"> <FontAwesomeIcon icon={faUsers} /> </span>
                        <label> Funcionários </label>
                    </Link>
                </li>
                <li className={active===5?'active':''} onClick={()=>{setActive(5)}}>
                    <b></b>
                    <b></b>
                    <Link to="/pesquisar"> 
                        <span className="icon"> <FontAwesomeIcon icon={faSearch} /> </span>
                        <label> Pesquisar </label>
                    </Link>
                </li>
                <li className={active===6?'active':''} onClick={()=>{setActive(6)}}>
                    <b></b>
                    <b></b>
                    <Link to="/finances"> 
                        <span className="icon"> <FontAwesomeIcon icon={faMoneyBillAlt} /> </span>
                        <label> Financeiro </label>
                    </Link>
                </li>
                <li className={active===7?'active':''} onClick={()=>{setActive(7)}}>
                    <b></b>
                    <b></b>
                    <Link to="/configuracoes"> 
                        <span className="icon"> <FontAwesomeIcon icon={faCogs} /> </span>
                        <label> Configurações </label>
                    </Link>
                </li>
            </ul>
        </Container>
    );
}

export default Menu;