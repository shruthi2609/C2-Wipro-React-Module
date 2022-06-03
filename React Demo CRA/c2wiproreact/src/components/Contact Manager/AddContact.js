import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddContact(){
    const [id,setID]=useState("")
    const [fname,setFname]=useState("")
    const [email,setEmail]=useState("")
    const [role,setRole]=useState("")
    const [message,setMessage]=useState("")
    const navigate=useNavigate()
    const handleChange=(e)=>{
        if(e.target.name==="id"){
            setID(e.target.value)
        }
        if(e.target.name==="fname"){
            setFname(e.target.value)
        }
        if(e.target.name==="email"){
            setEmail(e.target.value)
        }
        if(e.target.name==="role"){
            setRole(e.target.value)
        }
    }
    const handleSubmit=()=>{
        console.log("something")
        axios.post("http://localhost:3001/empDetails",{
            "id":id,
            "fname":fname,
            "email":email,
            "role":role
        }).then((res)=>setMessage(res.statusText)).catch((err)=>console.log(err))

        setTimeout(()=>navigate("/"),3000)
    }
    return(
        <div>
          ID:  <input type="text" name="id" onChange={(e)=>handleChange(e)}></input>
          Name:  <input type="text" name="fname" onChange={(e)=>handleChange(e)}></input>
          Email:  <input type="text" name="email" onChange={(e)=>handleChange(e)}></input>
          Role:  <input type="text" name="role" onChange={(e)=>handleChange(e)}></input>
          <button onClick={handleSubmit}>add</button>
          {message}
        </div>
    )
}