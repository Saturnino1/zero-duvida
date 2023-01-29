import styled from "styled-components";
let fora = "-130px"
export const All = styled.div`
background-color: #001234;
// background-color: #222;
color: #fff9;
width: 300px;
height: 67px;
position: fixed;

ul{
    list-style: none;
    font-size: 10pt;
    margin-top: 36px;
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
}
ul > li{
    text-align: center;
    margin-bottom: 5px;
}
.menu-logo{
    width: 40px;
    position: absolute;
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
    /* text-h: 12px; */
    color: #fff;
    cursor:pointer;
    margin-right: 10px;
    // color: red;
}
.close{
    display:none;
}

.nav2{
    // background-color: #AAAA;
    height: 194px;
    width: 100px;
    font-family: Arial;
    /* position: absolute; */
    right: 0;
}
.logo{
    width: 12px;
    height: 10px;
    // background-color: whitesmoke
}

nav{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    /* box-shadow: 4px 0px 6px 3px #F7FF00; */
}

h1{
    text-align:center;
    font-family: Papyrus;
    font-size:  13pt;
    /* box-shadow: 4px 0px 6px 3px #F7FF00; */
}

@media screen and ( max-width:700px){
    width: 100%;
    h1{
        padding-top: 5px;
        font-family: Papyrus;
    }
    ul{
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