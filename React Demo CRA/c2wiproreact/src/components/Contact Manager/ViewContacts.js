import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function ViewContact(){
    const [serverRes,setRes]=useState([])
    const [flag,setFlag]=useState(false)
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3001/empDetails").then((res)=>setRes(res.data)).catch((err)=>console.log(err))
    },[])
   /* useEffect(()=>{
        axios.get("http://localhost:3001/empDetails").then((res)=>setRes(res.data)).catch((err)=>console.log(err))
    },[flag])*/
    const handleSubmit=()=>{
    navigate("/create")
    }
   /* const handleDelete=(item)=>{
        axios.delete(`http://localhost:3001/empDetails/${item.id}`).then((res)=>{
        const temp=[...serverRes]
        const result=temp.filter((obj)=>item.id!==obj.id)
        setRes(result)
        }).catch((err)=>console.log(err))
        navigate(`/delete/${item.fname}`)
    }*/
    const handleDelete=(item)=>{
        navigate(`/delete/${item.id}`)
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
                        <button onClick={()=>handleDelete(item)}>delete</button>
                    </div>
                ))
            }


        </div>
    )
}