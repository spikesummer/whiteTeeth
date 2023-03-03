import React, { useState, useEffect} from "react";
import { Container } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Calendario = props => {

    const [ano, setAno] = useState(Number(new Date().getFullYear()));
    const [mes, setMes] = useState(Number(new Date().getMonth()));
        
    useEffect(()=>{

        const monthDays = document.querySelector('.days');
        const lastDay = new Date(ano, mes + 1, 0).getDate();
        const prevLastDays = new Date(ano, mes, 0).getDate();
        const firstDaysIndex = new Date(ano, mes, 1).getDay();
        const lastDaysIndex = new Date(ano, mes + 1, 0).getDay();
        const nextDays = 7 - lastDaysIndex - 1;
    
        const months = [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro"
        ];

        const weekDays = [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado"
        ];
       
        document.querySelector('.date h1').innerHTML = months[mes];
        
        document.querySelector('.date p').innerHTML = weekDays[new Date().getDay()] + ", " + new Date().getDate() + " de " +  months[new Date().getMonth()] + " de " + new Date().getFullYear();
        
        let days = "";

        for(let x = firstDaysIndex; x > 0; x--){
            days += `<div class="prev-date">${prevLastDays - x + 1}</div>`;
        }

        for(let i = 1; i <= lastDay; i++){
            if(i === new Date().getDate() && mes === new Date().getMonth()){
                days += `<div class="today" data-mes=${mes+1} data-ano=${ano}>${i}</div>`;
            }else{
                days += `<div data-mes=${mes+1} data-ano=${ano}>${i}</div>`;
            }        
        }

        for(let j = 1; j <= nextDays; j++){
            days += `<div class="next-date" data-mes=${mes===11?1:mes+2} data-ano=${ano}>${j}</div>`;
            monthDays.innerHTML = days;
        }
  
    }, [ano, mes])
    
    function monthPrev(){
        mes<1?setMes(11):setMes(mes - 1);
    };

    function monthNext(){
        mes>=11?setMes(0):setMes(mes + 1);
    };

    return (
        <Container>
            <div className="top">
                <div className="month">
                    <span className="prev"><FontAwesomeIcon icon={faAngleLeft} onClick={monthPrev} /></span>
                    <div className="date">
                        <h1></h1>
                        <p></p>
                    </div>
                    <span className="next" onClick={monthNext}><FontAwesomeIcon icon={faAngleRight}/></span>
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
            </div>
            <div className="bottom">
                <div className="days" onClick={(item)=>{console.log(item.target.dataset.ano, item.target.dataset.mes, item.target.innerHTML)}}>
            </div>
                
            </div>
        </Container>
    )
}

export default Calendario;