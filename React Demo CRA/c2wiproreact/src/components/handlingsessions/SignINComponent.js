import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignINComponent(){
    const [uname,setUsername]=useState("")
    const [pwd,setPwd]=useState("")
    const [flag,setFlag]=useState(false)
    const [message,setMessage]=useState("")
    const navigate=useNavigate()
    const handleChange=(e)=>{
        if(e.target.name==="username"){
            setUsername(e.target.value)
        }
        if(e.target.name==="pwd"){
            setPwd(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        let text=""
        axios.get(`http://localhost:3001/loginDetails?username=${uname}`).then((res)=>setRes(res.data))
        if(pwd===resPwd){
            setFlag(true)
            localStorage.setItem("globalusername",uname)
             
        }
        
        else{
            text+="password and re-enter password does not match"
        }
        setMessage(text)
    }
    return(
        <div>
            <form>
                useremail:<input type='text' name="username" onChange={(e)=>handleChange(e)}></input>
                password:<input type='text' name="pwd" onChange={(e)=>handleChange(e)}></input>
            </form>
            <button onClick={handleSubmit}>signin</button>
            {
                flag?navigate("/dashboard"):<h3>{message}</h3>
            }
        </div>
    )
}