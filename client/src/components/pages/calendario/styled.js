import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 710px;
    min-height: 600px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: #205072;

    .month{
        width: 100%;
        height: 8rem;
        background: rgba(255, 255, 255, 0.4);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        text-align: center;
        text-shadow: 0 .3rem .5rem rgba(255, 255, 255, 0.3);
    }
    span.prev, span.next{
        font-size: 2.5rem;
        cursor: pointer;
    }
    .month h1{
        font-size: 2.5rem;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        margin-bottom: 1rem;
    }
    .month p{
        font-size: 1rem;
    }
    .weekdays{
        width: 100%;
        height: 5rem;
        padding: 0 0.4rem;
        display: flex;
        background: rgba(255, 255, 255, 0.4);
        align-items: center;
    }
    .weekdays div{
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
        width: calc(700px / 7);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: default;
        text-shadow: 0 0.3rem 0.5rem rgba(255, 255, 255, 0.5);
    }
    .days{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0.2rem;
        font-weight: 600;
    }
    .days div{
        font-size: 1.3rem;
        margin: 0rem;
        width: calc(690px / 7);
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 0 0.3rem 0.5rem rgba(255, 255, 255, 0.3);
        transition: background-color 0.2s;
    }
    .days{
        div:hover:not(.today){
            background-color: rgba(255, 255, 255, 0.4);/*rgba(50, 157, 156, 0.5); */
            border: 0.2rem solid #777;
            cursor: pointer;
        }
    }
    .prev-date, .next-date{
        opacity: 0.5;
    }
    .today{
        background: rgba(255, 255, 255, 0.4);
    }
`;