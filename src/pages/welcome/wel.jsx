import React from 'react'
import { Link } from 'react-router-dom';
import fundo from "../../image/fundo-student2.png";
import { WelStyle } from './wel-style';

export const Welcome = () => {
  return (
    <>
    <WelStyle>
        <header>
            <h1>Zero Dúvidas</h1>
        </header>

        <div className="photo flex justify-center w-full h-full">
            <img className='h-full w-2/3 md:w-2/5 lg:w-1/4'  src={fundo} alt="" />
        </div>
        <div className="flex justify-center mt-3">
            <button className='bg-blue-900 px-6 py-2 sticky top-10 rounded-full'><Link to='/zero-duvida/login'>Iniciar</Link> </button>
        </div>
    </WelStyle>
    </>
  )
}
