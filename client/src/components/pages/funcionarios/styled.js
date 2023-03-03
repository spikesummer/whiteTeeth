import styled from 'styled-components'

export const Caixa = styled.div`
    background: #aaa;
    grid-area: rightSide;
    background: #CFF4D2;
    margin: 15px 15px 15px 0;
    border-radius: 15px;
    display: grid;
    grid-template-areas: 'topbar'
                         'content';
    grid-template-rows: 100px 1fr;
    overflow: hidden;

  
`
export const Main = styled.main`
    background: #fff;
    display: flex;
    flex-direction: column;
    grid-area: content;
    width: 98%;
    position: relative;
    padding: 5px;
    margin: 15px auto;
    border-radius: 10px;
    box-shadow: 0 12px 15px rgba(0, 0, 0, 0.18);
    border: 1px solid rgba(0, 0, 0, 0.2);

    .TableContainer{
        position: relative;
        margin: 50px auto;
    }
`;

export const TopMenu = styled.div`
    display: flex;
    margin-top: 15px;
    align-items: center;
    width: 100%;
    height: 60px;
    justify-content: space-evenly;
`;

export const Search = styled.div`
    background: transparent;
    border: 2px solid #205072;
    display: flex;  
    border-radius: 30px;
    height: 60px;
    padding: 5px;

    input[type="text"]{
        width: 600px;
        outline: none;
        background: transparent;
        color: #205072;
        border: none;
        font-size: 18px;
        padding: 0 15px;
    }

    .searchLogo{
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        font-size: 20px;
        cursor: pointer;
        background: rgba(32, 80, 114, 0.3);
        color: #205072;
        transition: 0.2s all ease-in-out;
    }

    .searchLogo:hover{
        background: rgba(32, 80, 114, 0.6);
    }
`;

export const CriarFunc = styled.a`
    display: flex;
    width: 160px;
    padding: 0 15px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background: #56C596;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 4px 4px 15px rgba(0,0,0, 0.35);
    transition: 0.2s all ease-in-out;

    :hover{
        background: rgba(86, 197, 150, 0.8);
    }

    .iconeBotao{
        font-size: 20px;
        font-weight: 800;
        color: #77eb94;
        text-shadow: 5px 5px 15px rgba(0,0,0, 0.8);      
    }

    .text{
        font-size: 20px;
        font-weight: 800;
        margin-left: 5px;
        color: #205072;
        letter-spacing: 1px;
        text-shadow: 5px 5px 15px rgba(0,0,0, 0.3); 
    }

    :hover .text{
        letter-spacing: 2px;
    }
`;

export const PopUpCadastrar = styled.div`
    
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
`;