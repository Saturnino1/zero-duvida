import React, { useEffect, useState } from 'react'
import {Estilo} from './home-style'
import {GoPerson } from 'react-icons/go'
// import {AiOutlineReload} from 'react-icons/ai'
import {MdThumbUp} from 'react-icons/md'
import {BiLoader} from 'react-icons/bi'
import axios from 'axios'
import { Name } from '../../components/PageName/name';
import { Head } from '../../components/header/header'

export const Home = () => {

const [data,setData] = useState([])
const [msg,setMensg] = useState("")
const GetData = async () =>{
    
    const dados = await axios.get('https://apitest0.000webhostapp.com?sms=true')
    .then((data) => {
        console.log(data.status);
        return data.data;
    })
    // console.log(dados);
    setData(dados);
    
}

const Check = () =>{
    setTimeout(()=>{
        setMensg("* Verefique sua conecao a internet! *")
        },6000)
}

useEffect(()=>{
    GetData()
},[])

 while ( data.length === 0  ) {    // data.length === 0 
    return(
        <>
            <Head requires={{"search":true,"add":true,"menu": true}} />
            <Name nome = "Publicações"/>
            <Estilo>
                <div className="load">
                <p>
                    <BiLoader />
                </p> 
                <label>A carregar...</label>     
                <span>{msg}</span>
                {Check()}
                </div>
            </Estilo> 
        </> 
    )
 }    


  return (
    <>
        <Head /> 
        <Estilo>
        <Name nome = "Publicações"/>
        <div className="conteiner"></div>
            <div className="all-card">
            {data.map((data)=>{
                return(
                    <div className="post-card" key={data.id}>
                        <div className="top-info">
                        {/* <img src="" alt="" /> */}
                            <label htmlFor="">
                                <picture>
                                    <GoPerson/> 
                                </picture>
                                <h3>{data.nome}</h3>
                            </label>
                            <sub>{data.post_date.substring(0,10).split('-').reverse().join('-')}</sub>
                        </div>
                        <div className="card-texto">
                        <p>{data.texto}</p>                
                        </div>
                        <hr/> 
                        <div className="card-footer">
                            <div className="like-area">
                                <MdThumbUp/>
                            </div>
                            <div className='comment'>Comentarios</div>               
                            <span>Denunciar</span>               
                        </div>

                    </div>
                )
            })}
            
                
            </div>
            
        </Estilo>
     </>
  )
}
