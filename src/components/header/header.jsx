import {AiOutlineUnorderedList, AiOutlineClose} from 'react-icons/ai'
import { All } from './header-style'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { MdHomeFilled} from 'react-icons/md'
import {CgProfile } from 'react-icons/cg'
import {GiNewspaper} from 'react-icons/gi'
import {BsFillPlusCircleFill} from 'react-icons/bs'

export const Head = () =>{
    const [menuOpen, setMenuOpen] = useState(false)
    const $ = document.querySelector.bind(document)
    const toogleMenu = () =>{
        let fora = "-130px";
        setMenuOpen(!menuOpen)
        // console.log(menuOpen);
        if (!menuOpen) {
            $('ul').style.right = "0"
            $('ul').style.opacity="100%"
            $('.close').style.display = "inline"
            $('.open').style.display = "none"
            $('.close').style.transition = "1s"
            $('.open').style.transition = "1s"
            $('ul').style.transition = "1s";
        }else{
            $('ul').style.right=fora
            $('ul').style.opacity="0%"
            $('ul').style.transition = "1s";
            
            $('.close').style.display = "none"
            $('.close').style.transition = "1s"
            $('.open').style.transition = "1s"
            $('.open').style.display = "inline"
        }
    }

    return(
        <All>
            <h1>Zero Duvidas</h1>
            <nav>
                <div className="logo">
                    <BsFillPlusCircleFill/>
                </div>
                <form>
                    <input id='pesqui' type="text"  placeholder='pesquisar..'/>
                </form>
                <div className='nav2'>
                    <div className="menu-logo" onClick={toogleMenu}>
                        <div className="open">
                            <AiOutlineUnorderedList/>
                        </div>
                        <div className="close">
                            <AiOutlineClose/>
                        </div>

                    </div>
                     
                    <ul>                        
                            <li><Link to='/zero-duvida/home'><i><MdHomeFilled/></i>Início</Link></li>
                            <li><Link to = '/zero-duvida/profile' ><i><CgProfile/></i> Perfil</Link> </li>
                            <li><Link to= '/zero-duvida/eventos' ><i><GiNewspaper/></i>Eventos</Link> </li>
                            <li><Link to='/zero-duvida/about' >Sobre nós</Link> </li>
                            <li><Link to = '/zero-duvida/politica'>Políticas</Link> </li>

                            {/* <li>Home</li>
                            <li>Perfil </li>
                            <li>Eventos </li>
                            <li>Sobre nos </li>
                            <li>Políticas </li> */}
                    </ul>
                       
                </div>
            </nav>
        </All>
    )
}


