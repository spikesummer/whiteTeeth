import React from "react";
import { Container, Main } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Calendario = props => {
    return (
        <Container>
            <div className="month">
                <span className="prev"><FontAwesomeIcon icon={faAngleLeft}/></span>
                <div className="date">
                    <h1>OUTUBRO</h1>
                    <p>Terça, 2 de setembro de 2021</p>
                </div>
                <span className="prev"><FontAwesomeIcon icon={faAngleRight}/></span>
            </div>
            <div className="weekdays">
                <div>Dom</div>
                <div>Seg</div>
                <div>Ter</div>
                <div>Qua</div>
                <div>Qui</div>
                <div>Sex</div>
                <div>Sáb</div>
            </div>
            <div className="days">
                <div className="prev-date">29</div>
                <div className="prev-date">30</div>
                <div className="prev-date">31</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div className="today">11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div>
                <div>21</div>
                <div>22</div>
                <div>23</div>
                <div>24</div>
                <div>25</div>
                <div>26</div>
                <div>27</div>
                <div>28</div>
                <div>29</div>
                <div>30</div>
                <div className="next-date">1</div>
                <div className="next-date">2</div>
                <div className="next-date">3</div>
                <div className="next-date">4</div>
                <div className="next-date">5</div>
                <div className="next-date">6</div>
                <div className="next-date">7</div>
                <div className="next-date">8</div>
                <div className="next-date">9</div>
            </div>
        </Container>
    )
}

export default Calendario;