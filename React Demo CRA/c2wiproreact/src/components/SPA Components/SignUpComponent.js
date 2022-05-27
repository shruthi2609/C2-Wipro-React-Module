import { useState } from "react"
import { useNavigate } from "react-router-dom"
const SignUpComponent=()=>{
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [rpassword,setRPassword]=useState("")
    const [country,setCountry]=useState("")
    const [message,setMessage]=useState("")
    const [flag,setFlag]=useState(false)
    const [exper,setExp]=useState("")
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
        if(e.target.name==="password"){
            setPassword(e.target.value)
        }
        if(e.target.name==="rpassword"){
            setRPassword(e.target.value)
        }
        if(e.target.name==="exp"){
        
            setExp(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        let text=""
        if(rpassword!==password){
            text+="password and re-enter password does not match"
        }
        
        else{
           setFlag(true) 
        }
        setMessage(text)
    }
    
    return(
        <div>
            {console.log(exper)}
            <form>
               Username :<input type="text" name='uname' onChange={(e)=>handleChange(e)}></input>
               <br></br>
               Email :<input type="text" name='email' onChange={(e)=>handleChange(e)}></input>
               <br></br>
               Password :<input type="text" name='password' onChange={(e)=>handleChange(e)}></input>
               <br></br>
               Re-enter Password :<input type="text" name='rpassword' onChange={(e)=>handleChange(e)}></input>
               <br></br>
               Country :<input type="text" name='country' onChange={(e)=>handleChange(e)}></input>
               <br></br>
               <select name="exp" onChange={(e)=>handleChange(e)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
               </select>
               <button onClick={(e)=>handleSubmit(e)}>signup</button>
             
               {
                   flag? navigate(`/dashboard/${username}/${country}`):<h1>{message}</h1>
               }
            </form>
        </div>
    )

}
export default SignUpComponent