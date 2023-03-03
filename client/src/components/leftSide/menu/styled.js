import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    transition: 0.5s;

    ul{
        padding: 40px 0px 0px 10px;
    }

    ul li{
        position: relative;
        list-style: none;
        width: 100%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
       
    }

    li a{
        position: relative;
        display: block;
        width: 100%;
        display: flex;
        text-decoration: none;
        color: #7BE495;
        font-weight: 700;
    }

    li:hover a{
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20px 0px 0px 20px;
        z-index: 10;
    }

    li.active{
        background: #CFF4D2;
    }

    li b:nth-child(1){
        position: absolute;
        top: -20px;
        height: 20px;
        width: 100%;
        background: #CFF4D2;
        display: none;
    }

    li b:nth-child(1)::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-bottom-right-radius: 20px;
        background:  #205072;
    }

    li b:nth-child(2){
        position: absolute;
        bottom: -20px;
        height: 20px;
        width: 100%;
        background: #CFF4D2;
        display: none;
    }

    li b:nth-child(2)::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:  #205072;
        border-top-right-radius: 20px;
    }

    li.active b:nth-child(1),
    li.active b:nth-child(2){
        display: block;
    } 

    li.active a{
        color: #015572;
    }

    li.active .icon{
        color: #015572;
    }

    li a .icon{
        position: relative;
        display: block;
        min-width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 1.5em;
        color: #7BE495;
    }

    li a label{
        position: relative;
        display: block;
        height: 60px;
        line-height: 60px;
        padding-left: 10px;
        white-space: normal;
        cursor: pointer;
    }


`;