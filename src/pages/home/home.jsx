import React, { useEffect, useState } from 'react'
import {Estilo} from './home-style'
import {GoPerson } from 'react-icons/go'
// import {MdThumbUpOffAlt} from 'react-icons/md'
import {MdThumbUp} from 'react-icons/md'
import axios from 'axios'




export const Home = () => {

const [data,setData] = useState([])

const GetData = async () =>{
    
    const dados = await axios.get('https://apitest0.000webhostapp.com?sms=true')
    .then((data) => {
        // console.log(data.data);
        return data.data;
    })
    setData(dados);
    
}

useEffect(()=>{
    GetData()
},[])








    
//   const estilo =  "text-align:center;"; 
  return (
    <Estilo>
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
                        <sub>{data.post_date}</sub>
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
    
  )
}
