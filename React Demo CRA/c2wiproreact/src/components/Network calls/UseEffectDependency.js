import { useEffect, useState } from "react"

export default function UseEffectDependency(){
    const [userdata,setUserdata]=useState({email:"",username:""})
    const [id,setId]=useState("")
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{return res.json()}).then((res)=>setUserdata(res)).catch((err)=>console.log(err))
    },[id])
   
   const handleChange=(e)=>{
        setId(e.target.value)
    }
    return(
        <div>
            {console.log(`https://jsonplaceholder.typicode.com/users/${id}`)
            }
            {console.log(userdata)}
            
            <h1>Enter the Id it will fetch dynamically</h1>
            <input type="text" name="uid" onChange={(e)=>handleChange(e)}></input>
            <h1>{userdata.username}</h1>
            <p>{userdata.email}</p>
        </div>
    )
}