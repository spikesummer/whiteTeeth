import styled from 'styled-components'

export const Container = styled.div`
    grid-area: topbar;
    display: flex;
    width: 98%;
    height: 60px;
    background: #fff;
    margin: 20px auto 10px auto;
    position: relative;
    border-radius: 10px;
    padding: 0px 15px;
    align-items: center;
    justify-content: flex-end;
    box-shadow: 0 12px 15px rgba(0, 0, 0, 0.18);
    border: 1px solid rgba(0, 0, 0, 0.2);

   .topbar{
       display: flex;
             
       .topbar-body{
           display: flex;

            span{
                margin-right: 10px;
                font-size: 22px;
                color:#888;
                text-shadow: 8px 5px 10px rgba(0, 0, 0, 0.4);
            }

            span.user{
                font-weight: 700;
            }
       }

        span.text{
            display: none;
            position: absolute;
            padding: 5px;
            border-radius: 20px;
            width: 70px;
            left: -15px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            top: 35px;
            background: rgba(255, 255, 255, 0.5);
            font-size: 16px;
            justify-content: center !important ;
            transition:0.8s ease-in-out;
        }

        span.text::before{
            content: '';
            position: absolute;
            background: rgba(255, 255, 255, 0.5);
            width: 12px;
            height: 12px;
            top: -7px;
            left: 18px;
            border-top: 1px solid rgba(0, 0, 0, 0.3);
            border-left: 1px solid rgba(0, 0, 0, 0.3);
            transform: rotate(45deg); 

        }

        .logout{
            display: flex;
            flex-direction: column;
            position: relative;
            
        }

        .logout:hover span.text{
            display: flex;
        }

        .notification{
            position: relative;
            display: flex;
        }
        .notification span{
            display: flex;
            position: absolute;
            background: rgba(255, 0, 0, 0.8);
            top: -5px;
            left: 8px;
            margin: 0;
            width: 15px;
            height: 15px;
            color: #fff;
            font-size: 12px;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-weight: 600;
        }
   }
`;