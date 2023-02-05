import styled from "styled-components";

export const Estilo = styled.div`
background-color: #C8C8C8;
border-radius: 0px 0px 20px 20px;
box-shadow: 0px 5px 13px 3px #0005;
width: 280px;
height: 30px;
display: flex;
justify-content:center;
align-items:center;
position: fixed;
/* top: 0; */
margin-top:67px;
z-index: 1;
h2{
  color:#123;
  font-size: 12pt;
}
@media screen and ( max-width:500px ){
    width: 100%;
    top:0;
    /* margin-top: 67px; */
}  
`