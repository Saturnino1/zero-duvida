import { ProfStyle } from "./profile-style"
// import { FcBusinessman } from "react-icons/fc"
import { Name } from "../../components/PageName/name"
import { Head } from "../../components/header/header"


export const MyProfile = () =>{
    return(
      <>
        <Head requires={{"search":false,"add":true,"menu": true}} />
        <Name nome = "Meu perfil"/>
        <ProfStyle>
          <main>
            <div className="cover"></div>
            <picture>
              <img src="https://avatars.githubusercontent.com/u/99210803?s=400&u=5bf3a1886c65eada560efe0ca69cc6fa7f7bb267&v=4" alt="foto de perfil" />
            </picture>
            <h3>Saturnino Moreira Mendes</h3>
          </main>
          <div className="myinfo-conteiner">
            
            <div className="myinfo info">
              <h4>Informações pessais</h4>
              <p>Olá, sou Saturnino, estudante de Engenharia de Sistemas Informático e gosto bastante de tecnologias e artes. {"<"}3 </p>
            </div>
            <div className="notes">
              <div className="rate info"></div>
              <div className="comment-num info"></div>
            </div>
            <div className="mypubs info" >
              <p>{'* Sem publicações *'}</p>
            </div>
          </div>
          
        </ProfStyle>
      </>
    )
}