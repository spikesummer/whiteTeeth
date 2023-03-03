import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 400px;
    height: 615px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
    color: #205072;
    
    margin-left: 10px;

   

    h1{
        width: 100%;
        line-height: 80px;
        background: rgba(255, 255, 255, 0.4);
        display: flex;
        justify-content: center;
        cursor: default;
        user-select: none;
        text-transform: uppercase;
        font-weight: 400;
    }

    .lista-de-agendamento{
        overflow-y: scroll;
        height: 100%;
        width: 100%;
        padding-right: 5px;
        
       
        ::-webkit-scrollbar{
        background: transparent;
        width: 12px;
        border-radius: 5px;
        overflow: hidden;    
        }

        ::-webkit-scrollbar-thumb{
            border-radius: 25px;
            height: 80px;
            background: rgba(86, 197, 150, 0.5);
            border: 1px solid rgba(103, 150, 224, 0.9);
            border-radius: 5px;
            box-shadow: inset 5px 5px 2px rgba(255, 255, 255, 0.5);     
        }

        ::-webkit-scrollbar-thumb:hover{
            background: rgba(86, 197, 150, 0.9);
        }
    }

    .agendamento{
        width: 100%;
        display: grid;
        grid-template-columns: 80px 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: "hora paciente" "hora doutor";
        margin-top: 10px;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
        transition: all 0.25s ease-in-out;
    
        span{
            grid-area: hora;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
        }

        h2{
            grid-area: paciente;
            display: flex;
            align-items: center;
            font-size: 18px;
            line-height: 40px;
        }

        h3{
            grid-area: doutor;
            display: flex;
            align-items: center;
            font-size: 14px;
            line-height: 40px;
            font-weight: 400;
        }
    }
    .agendamento:hover{
        background: rgba(255, 255, 255, 0.2);
    }

`;