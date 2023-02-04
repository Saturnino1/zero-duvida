import styled from "styled-components";


export const ProfStyle = styled.div`
    /* background-color: red; */
    margin-top: 67px;

    .cover{
        background-color: #260A0A;
        height: 106px;
        width: 100%;
        /* border-top: 3px solid red; */
    }
    main > picture {
        background-color: #ABABAB;
        top: 120px;
        left: 20px;
        width: 85px;
        height: 85px;
        border-radius: 40px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    picture:first-child{
        font-size: 30pt;
        color: red;
    }

    .myinfo-conteiner{
        padding: 10px;
        display: flex;
        flex-direction:column;
       justify-content:center;
       /* align-items:center; */
    }

    main > h3{
        margin: 32px auto 8px 14px;
        font-size: 10pt;
    }
    .myinfo{
       min-height: 50px; 
       width: 97%;
    }

    .info{
        background-color: #e0e0e092;
        height: 50px; 
        border-radius: 10px;
        margin-bottom: 8px;
        padding: 5px;
    }
    .rate, .comment-num{
        width: 48%;

    } 
    .notes{
        width: 97%;
        display: flex;
        justify-content: space-between;
    }   
    .myinfo > h4{
        font-size: 8pt;
        text-decoration:underline;
    }
    .myinfo > p{
        margin-top: 1px;
        font-size: 7pt;
    }

    .mypubs{
        min-height: 50px;
    }



`
