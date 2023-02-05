import styled from "styled-components";

export const WelStyle = styled.div`
    /* height: 450px; */
    margin-bottom: -10px;
    header{
        color: #fff9;
        width: 280px;
        height: 67px;
        position: fixed;
        z-index: 2;
        background-color: #001234;
        display: flex;
        justify-content:center;
        align-items:center
    }
    header >h1{
        text-align:center;
        font-family: Papyrus;
        font-size:  16pt;
    }
    img{
        width: 280px;
    }
    .btn-go{
        width:100%;
        height: 350px;
        position: absolute;
        top:0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 40px;
    }
    button{
        background-color: #001234;
        width: 70px;
        height: 30px;
        border-radius: 16px;
        border: none;
        cursor: pointer;
        z-index: 3;
        box-shadow: 2px 2px 4px 4px #0000006e;
    }

    a{
        text-decoration:none; 
        color: #ffffffc3;  
    }
    @media screen and (max-width:500px) {
        height: 100vh;
        img,header{
            width:100%;
        }
        img{
            /* height:110vh; */
        }
        .btn-go{
            height: 450px;
        }
        button{
            width: 120px;
            height: 40px;
        }
        
    }
` 
