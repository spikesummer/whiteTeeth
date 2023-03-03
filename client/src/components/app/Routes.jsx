import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Finances from '../pages/finances/Finances';
import Agenda from '../pages/agenda/Agenda';
import Pacientes from '../pages/pacientes/Pacientes';
import {Funcionarios} from '../pages/funcionarios/Funcionarios';
import Pesquisar from '../pages/pesquisar/Pesquisar';
import Configuracoes from '../pages/configuracoes/Configuracoes';
import LeftSide from '../leftSide/LeftSide';

const Routes = props => {
    return(
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/finances">
                    <Finances/>
                </Route>

                <Route exact path="/pacientes">
                    <Pacientes/>
                </Route>

                <Route exact path="/funcionarios">
                    <Funcionarios/>
                </Route>

                <Route exact path="/agenda">
                    <Agenda/>
                </Route>

                <Route exact path="/pesquisar">
                    <Pesquisar/>
                </Route>

                <Route exact path="/configuracoes">
                    <Configuracoes/>
                </Route>

            </Switch>
        </>
    )
}

export default Routes;