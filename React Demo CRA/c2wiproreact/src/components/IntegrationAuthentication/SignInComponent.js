import {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const SignInComponent=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [flag,setFlag]=useState(false)
    const [message,setMessage]=useState("")
    const navigate=useNavigate()
    const handleChange=(e,statename)=>{
        if(statename==="email"){
            setEmail(e.target.value)
        }
        if(statename==="password"){
            setPassword(e.target.value)
        }
    }
    const handleLogin=async (e)=>{
        e.preventDefault()
        try{
        const response=await axios.post("http://localhost:3001/login",{"email":email,"password":password})
        setMessage(response.data.msg)
        setFlag(response.data.status)
        if(response.data.status){
        localStorage.setItem("token",response.data.token)
        }
        }
        catch(err){
            console.log(err)
        }

    }
    const handleNavigate=()=>{
        navigate(`/dashboard/${email}`)
    }
return(
    <div>
        <form>
            <input type="text" onChange={(e)=>handleChange(e,"email")}></input>
            <input type="text" onChange={(e)=>handleChange(e,"password")}></input>
            <button onClick={(e)=>handleLogin(e)}>login</button>

        </form>
        {
            flag?handleNavigate():<h1>{message}</h1>
        }
    </div>
)
}
export default SignInComponent