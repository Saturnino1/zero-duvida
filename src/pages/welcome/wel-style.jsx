import styled from "styled-components";

export const WelStyle = styled.div`
    /* height: 450px; */
    margin-bottom: -10px;
    header{
        color: #fff9;
        width: 100%;
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
 

    a{
        text-decoration:none; 
        color: #ffffffc3;  
    }
    
` 
