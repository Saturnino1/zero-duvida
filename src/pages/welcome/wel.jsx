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

        <div className="photo">
            <img src={fundo} alt="" />
        </div>
        <div className="btn-go">
            <button><Link to='/zero-duvida/login'>Iniciar</Link> </button>
        </div>
    </WelStyle>
    </>
  )
}
