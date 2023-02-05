import { AiFillFacebook,
         AiFillInstagram,
         AiFillTwitterCircle,
         AiFillLinkedin
         } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FooterStyle } from "./footer-Style";

export const Footer = () =>{

    return(
        <footer>
            <FooterStyle >
                <div className="servicos">
                    <h5>Nosso Serviços</h5>
                    <ul>
                        <li>Auxilio com estudos</li>
                        <li>Auxilio na procura de emprego</li>
                        <li>Ensino de idiomas</li>
                        <li>criação de sites/vlogs/sistems</li>
                    </ul>
                </div>
                <div className="social">
                    <h5>Social Midida</h5>
                    <ul>
                        <li><Link to = "htpps://wwww.facebook.com/" ><AiFillFacebook /></Link> </li>
                        <li><Link to = "htpps://wwww.facebook.com/" ><AiFillTwitterCircle /></Link></li>
                        <li><Link to = "htpps://wwww.facebook.com/" ><AiFillInstagram/></Link></li>
                        <li><Link to = "htpps://wwww.facebook.com/" ><AiFillLinkedin/></Link></li>
                    </ul>
                </div>
                <div className="copyright">
                    <i>Copyright 2023</i>
                </div>
            </FooterStyle>
        </footer>
    )
}         