import styled from "styled-components";



export const FooterStyle = styled.div`
    background-color: #123;
    color: #fff8;
    min-height: 100px;
    width: 100%;
    padding: 10px; 
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    /* position: absolute; 
    bottom: 0px; */

    ul{
        list-style: none;
    }
    .social ul{
        display: flex;
    }
    li{
        font-size: 8pt;
        cursor: pointer;
    }
    .social li{
        height: 25px;
    }
    li:hover{
        text-decoration:underline;
    }
    li a{
        color: #ffffffbd;
        text-decoration:none;
        font-size: 16pt;
    }
    li a:hover{
        transform: scale(1.1);
        font-size: 18pt;

    }

    .servicos{
        display:flex;
        flex-direction:column;
        text-align:center;
    }
    h5{
        text-align:center;
        color: #fffe;
    }
    .copyright{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
    }
    i{
        font-size: 7pt;
        font-family: monospace;
    }
    @media screen and (max-width:500px) {
        bottom: -70px;
    }

`