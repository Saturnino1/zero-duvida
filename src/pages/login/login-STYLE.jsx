import styled from "styled-components";
// import Fundo from '../../image/book.png'

export const LogStyle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    /* background-image: url(); */
    height: 355px;

    header{
        color: #fff9;
        width: 280px;
        height: 67px;
        position: fixed;
        z-index: 2;
        background-color: #001234;;
        display: flex;
        top: 20px;
        justify-content:center;
        align-items:center
    }

    header >h1{
        text-align:center;
        font-family: Papyrus;
        font-size:  16pt;
    }
    h3{
        margin-bottom: 20px;
        color: #001234;
    }
    
    form{
        width: 80%;
        border-radius: 10px;
        background-color: #001234be;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
        padding: 10px;
        gap: 10px;
    }
    form label{
        color: #fff7;
        font-size: 10pt;
    }
    input, button{
        outline:none;
        border:none;
        width: 100%;
        height: 20px;
        border-radius: 8px;
    }
    input{
        padding-left: 8px;
    }
    button{
        background-color: #001234;
        color: #fff8;
        height: 25px;
        box-shadow: 3px 3px 8px 2px #4e4e4e92;
        cursor: pointer;
    }
    button:hover{
        background-color: #001746;
        color: #fff;
    }

    .msg{
        width: 100%;
        height: 15px;
        display:flex;
        justify-content:center;
        align-items:center;
        color: #ff2424d5;
    }

    span{
        height: 20px;
        /* background-color: red; */
        font-size: 6pt;
        padding-top: 10px;

    }
    @media screen and (max-width:500px) {
        header{
            width: 100%;
            top: 0;
        }
        h3{
            margin-top: 60px;
        }
        input{
            width: 267px;
            height: 28px;
        }
    }


`