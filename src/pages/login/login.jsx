import axios from "axios"
import { useEffect, useState } from "react"
import { Link, redirect, useNavigate } from "react-router-dom"
import { LogStyle } from "./login-STYLE"


export const Login = () =>{
    const [data, setData] = useState([])
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [msg,setMsg] = useState("")

    const [auth,setAuth] = useState("-1")
    let Navega = useNavigate()

    useEffect(()=>{
        axios.get('https://apitest0.000webhostapp.com')
        .then((d)=>{
            setData(d.data)
        })
    },[])

    const prencher = (e) =>{
        console.log(e.target.type)
        if(e.target.type==="email"){
            // console.log("Yaa");
            setEmail(e.target.value)
        }else{
            setSenha(e.target.value)
        }
    }

    const sms = (sms) =>{
        setTimeout(()=>{
            setMsg(sms);
        }, 1000)
        setTimeout(()=>{
            setMsg("");
        },1000)
    }
        
    const Validate = (e) =>{
        
        e.preventDefault()
        console.log("Email: "+email)
        console.log("Senha: "+senha)
        console.log(data)
        data.map((d)=>{
            if(d.email === email && d.pass === senha ){
                setAuth(d.id); 
            }
        })
        
        if(auth === "-1"){
            sms("Autentificação inválida")
        }else{
            localStorage.setItem("id", auth)
            Navega("/zero-duvida/home");
        }
        console.log("Retorno: "+auth)       
    }
    return(
        // <>
            <LogStyle>
                <header>
                    <h1>Zero Dúvidas</h1>
                </header>
                <h3>Autentificação</h3>
                <form>
                    <label htmlFor="email-campo">Email:   {/*  <br />  */}
                    <input type="email" name="email" id="email-campo" autoFocus onChange={prencher}/>
                    </label>
                    <label htmlFor="senha-campo">Palavra-passe:
                        <input type="password" name="senha" id="senha-campo" onChange={prencher}/>
                    </label>
                    <button onClick={Validate}>Entrar</button>
                    <div className="msg">{msg}</div>
                </form>
                <span>
                    Não tens, uma conta?<Link to=''>Clique aqui</Link> Para baixar formulário. 
                </span>
            </LogStyle>

        // </>
    )
}