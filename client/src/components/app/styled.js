import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    background: linear-gradient(to right, #205072, #329D9C);
    grid-template-columns: 280px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'leftSide rightSide';

`;