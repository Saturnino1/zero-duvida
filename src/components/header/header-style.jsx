import styled from "styled-components";
let fora = "-130px"
export const All = styled.div`
background-color: #001234;
// background-color: #222;
color: #fff9;
width: 100%;
height: 67px;
position: fixed;
z-index: 2;
/* position: ; */
ul{
    list-style: none;
    font-size: 10pt;
    margin-top: 10px;
    background-color: #001234;
    width: 100px;
    height: 160px;
    padding-top: 5px;
    padding-right: 10px;
    display:flex;
    flex-direction: column;
    align-items: right;
    position: absolute;
    right: ${fora};
    transition: 2s;
    opacity: 0%;
    border-top: 1px solid #C8C8C8;
}
ul > li{
    margin-left: 10px;
    margin-bottom: 5px;
}
form > input {
    border: none;
    border-bottom: 1px solid;
    outline: none;
    background-color: #1234;
    color: #d4d4d4ed;
    width: 150px;
    margin-top: 5px;
    font-size: 9pt;
    padding-left: 3px;
    text-align:center;
}

form > input::placeholder{
    color: #d3d3d3;
    font-size: 7pt;
}


ul > li > a{
    color: white;
    text-decoration: none;
}
.menu-logo{
    width: 40px;
    /* position: absolute; */
    right:0;
    height: 30px;
    display:flex;
    align-items:center;
    justify-content: center;
    /* margin-top: 2em; */
    /* background-color: red; */
}
.menu-logo:first-child{
    font-size: 19pt;
    color: #fff;
    cursor:pointer;
}
.close{
    display:none;
}
.nav2{
    /* background-color: #AAAA; */
    font-family: Arial;
}
.logo{
    width: 12px;
    height: 10px;
    // background-color: whitesmoke
}
.logo:first-child{
    font-size: 18pt;
    cursor: pointer;
}
nav{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    /* box-shadow: 4px 0px 6px 3px #F7FF00; */
    height: 2px;
}
h1{
    text-align:center;
    font-family: Papyrus;
    font-size:  13pt;
    cursor:auto;
    /* box-shadow: 4px 0px 6px 3px #F7FF00; */
}
@media screen and ( max-width:500px){
    width: 100%;
    h1{
        padding-top: 5px;
        font-family: Papyrus;
    }
    .menu-logo:first-child{
        font-size: 30pt;
    }
    .menu-logo{
        margin-right: 8px;
    }
    ul{
        margin-top: auto;
        font-size: 14pt;
        width: 130px;
        height: auto;
    }
    ul > li{           
        padding: 3px;  
    }                 
    li:last-child{     
        padding-bottom: 20px;
    }
    li:first-child{
        padding-top: 20px;
    }
    
}

`



