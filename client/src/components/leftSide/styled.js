import styled from 'styled-components'

export const Container = styled.div`
    grid-area: leftSide;
    background: transparent;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 140px 1fr;

    .logo{
        height: 60px;
        width: 60px;
        position: absolute;
        transform: translateY(-30px);
        left: calc(50% - 30px);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        color: white;
        border-radius: 50%;
        background: rgba(86, 197, 150, 0.2);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    h1{
        text-transform: uppercase;
        font-size: 1.7em;
        margin-top: 40px;
        color: rgba(50, 157, 156, 1);
        text-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
        letter-spacing: 1px;
    }

    span{
        color: #476285/*#CFF4D2; #205072;*/ 
        font-weight: 700;
        font-size: 0.9em;
    }
`
export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 20px 0px 20px;
    height: 110px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(25px);
    border-radius: 10px;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.25);
`;

