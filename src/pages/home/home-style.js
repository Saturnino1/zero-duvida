import styled from "styled-components";

export const Estilo =  styled.div`
    
    h1{
        text-align:center
    }
    .all-card{
        /* background-color: red; */
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* margin-top: 100px; */
        z-index: 0;
    }
    .conteiner{
        width: 100%;
        height:108px;
    }
     
    .load{
        font-family: Arial, Helvetica, sans-serif;
        display:flex;
        align-items: center;
        justify-content:center;
        flex-direction: column;
        /* background-color: red; */
        width: 100%;
        height: 60vh;
        position: relative;
        z-index:-1;
    }
    .load p{
        font-size: 30pt;
        /* background-color: red; */
        width: 60px;
        height: 60px;
        animation-name: rodar;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        display: flex;
        align-items: center;
        justify-content: center;
        /* transition: 1s; */
    }
    .load > span{
        position: absolute;
        bottom: 40px;
        color: #1234
    }


    @keyframes rodar {
        0%{
            transform: rotate(0deg);
            transition: 1s;
        }
        100%{
            transform: rotate(360deg);
            transition: 1s;
        }
    }


    .load label{
        margin-top: -8px; 
    }

    .post-card{
        display: flex;
        justify-content: center;
        width: 90vw;
        height: 160px;
        background-color: #FFFFFF;
        border-radius: 20px;
        padding: 10px;
        margin-bottom: 10px;
        /* position: relative; */
    }
    .post-card > .top-info{
        display:flex;
        align-items: flex-end;
        margin-bottom: 3px;
    }
    .post-card > .top-info > label{
        display: flex;
        align-items: end;
        
    }
    .post-card > .top-info > label > h3{
        font-size: 12pt;
        margin: auto 3px -3px 4px;
    }
    .post-card > .top-info > sub{
        font-size: 5pt;
        margin-top: 8px;
        color: #5A5A5A;
    }
    .post-card > .top-info > label > picture{
        --val: 20px;
        height: var(--val);
        width: var(--val);
        background-color: #0003;
        border-radius: 20px;
        display: flex;
        justify-content:center;
        align-items:center;

    }

    .post-card >  .card-texto{
        /* background-color: #123; */
        max-height: 55px;
        min-height: 60px;
        margin-bottom: 5px;
        overflow: hidden;
        padding-left: 7px;
        padding-right: 7px;
        padding-top: 2px;
        
    }
    .post-card > .card-texto > p{
        font: 9pt Arial;
        /* text-align: justify; */
    }
    .post-card > .card-footer{
        /* background-color: blue; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 5px;
    } 
    .post-card > .card-footer > .like-area{
        /* background-color: red; */
        width: 40px;
        font-size: 14pt;
    }
    .post-card > .card-footer > span , .post-card > .card-footer > .comment {
        font-size: 11pt;
    }
    .post-card > .card-footer > .comment{
        text-decoration: underline;
    }
    .post-card > .card-footer > span{
        color: red;
    }


    @media screen and (min-width: 500px) {
        .post-card{
            width: 16em;
            height: 8em;
        }
    }

    @media screen and (max-width: 500px) {
        .post-card >  .card-texto{
            min-height: 80px;
        }
        .post-card >  .card-texto p{
           font-size: 14pt;
        }

        
        
    }
`