import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function ViewContact(){
    const [serverRes,setRes]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3001/empDetails").then((res)=>setRes(res.data)).catch((err)=>console.log(err))
    },[])
    const handleSubmit=()=>{
    navigate("/create")
    }
    return(
        <div>
            {console.log(serverRes)}
            <h2>Contact Manager</h2>
            <button onClick={handleSubmit}>Create a new contact</button>
            {
                serverRes.map((item)=>(
                    <div>
                        <h1>{item.fname}</h1>
                        <p>{item.email}</p>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                ))
            }


        </div>
    )
}