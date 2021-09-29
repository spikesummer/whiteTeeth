import styled from 'styled-components'

export const Container = styled.div`
    grid-area: rightSide;
    background: #CFF4D2;
    margin: 15px 15px 15px 0;
    border-radius: 15px;
    display: grid;
    grid-template-areas: 'topbar'
                         'content';
    grid-template-rows: 100px 1fr;

`
export const Main = styled.main`
    background: url("at-a-dentist-with-a-smile.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    width: 98%;
    position: relative;
    padding: 5px;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    border-radius: 10px;
    box-shadow: 0 12px 15px rgba(0, 0, 0, 0.18);
    border: 1px solid rgba(0, 0, 0, 0.2);
`;