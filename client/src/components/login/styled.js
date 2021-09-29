
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(to right, #205072, #329D9C);
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(25px);
        padding: 10px 5px;
        width: 400px;
        height: 500px;
        border-radius: 10px;
        box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .logo{
        height: 90px;
        width: 90px;
        position: absolute;
        transform: translateY(-50px);
        left: calc(50% - 45px);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3em;
        color: white;
        border-radius: 50%;
        background: rgba(86, 197, 150, 0.2);
        box-shadow: 0 25px 25px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    h1{
        text-transform: uppercase;
        margin-top: 60px;
        color: rgba(50, 157, 156, 1);
        text-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
        letter-spacing: 1px;
    }

    span{
        color: #205072;
        font-weight: 700;
        text-shadow: 2px 5px 15px rgba(0, 0, 0, 0.4);
    }

    button{
        display: flex;
        color: white;
        letter-spacing: 1px;
        text-transform: uppercase;
        background: #205072;
        height: 40px;
        line-height: 40px;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 10px;
        width: 70%;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        margin-top: 35px;
        margin-bottom: 15px;
        box-shadow: inset 2px 5px 5px rgba(255, 255, 255, 0.3),
                    inset 0px -5px 10px rgba(0, 0, 0, 0.3),
                    5px 5px 10px rgba(0, 0, 0, 0.3);
                    
    }

    button:hover{
        background: rgba(32, 80, 114, 0.8);
        letter-spacing: 2px;
    }

    input{
        border: none;
        border-radius: 10px;
        width: 70%;
        height: 35px;
        padding: 5px 5px 5px 10px;
        margin: 10px;
        outline: none;
        color: #205072;
        font-weight: 700;
        font-style: italic;
        font-size: 14px;
        background: #aaa;
        box-shadow: inset 2px 5px 5px rgba(0, 0, 0, 0.2),
                    inset -2px -5px 5px rgba(255, 255, 255, 0.4),
                    5px 5px 10px rgba(0, 0, 0, 0.3),
                    0px -5px 10px rgba(255, 255, 255, 0.3);
    }
    input::placeholder{
        color: rgba(80, 80, 80, 0.9);
        font-weight: 800;
        letter-spacing: 1px;
    }

    input[type="text"]{
        margin-top: 80px;
    }

`;