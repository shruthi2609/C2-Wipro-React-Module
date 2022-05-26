import { useState } from "react"
import { useNavigate } from "react-router-dom"
const SignUpComponent=()=>{
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [country,setCountry]=useState("")
    const navigate=useNavigate()
    const handleChange=(e)=>{
        if(e.target.name==="uname"){
            setUsername(e.target.value)
        }
        if(e.target.name==="email"){
           setEmail(e.target.value)
        }
        if(e.target.name==="country"){
            setCountry(e.target.value)
        }
    }
    const handleSubmit=()=>{
        navigate(`/dashboard/${username}/${email}/${country}`)
    }
    return(
        <div>
            <form>
               Username :<input type="text" name='uname' onChange={(e)=>handleChange(e)}></input>
               <br></br>
               Email :<input type="text" name='email' onChange={(e)=>handleChange(e)}></input>
               <br></br>
               Password :<input type="text" name='password' onChange={(e)=>handleChange(e)}></input>
               <br></br>
               Country :<input type="text" name='country' onChange={(e)=>handleChange(e)}></input>
               <br></br>
               <button onClick={handleSubmit}>signup</button>
            </form>
        </div>
    )

}
export default SignUpComponent