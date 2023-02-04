import { ProfStyle } from "./profile-style"
import { FcBusinessman } from "react-icons/fc"
import { Name } from "../../components/PageName/name"


export const MyProfile = () =>{
    return(
      <>
        <Name nome = "Meu perfil"/>
        <ProfStyle>
          <main>
            <div className="cover"></div>
            <picture>
              <FcBusinessman 

              />
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
              {'* Sem publicações *'}
            </div>
          </div>
          
        </ProfStyle>
      </>
    )
}