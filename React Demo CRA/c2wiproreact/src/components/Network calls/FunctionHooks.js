import { useEffect,useState } from "react"

export default function FunctionHooks(){
    const [serverData,setData]=useState([])
    const [msg,setMsg]=useState("initial")
    const [fname,setFname]=useState("john")
    useEffect(
    ()=>{
      console.log("useeffect")
    },[msg]
    )
    const updateMsg=()=>{
        setMsg("updated")
    }
    const updateFname=()=>{
        setFname("peter")
    }

    return(
        <div>
            {console.log("render")}
            <h1>User Data :{msg}</h1>
            <h2>{fname}</h2>
            <button onClick={updateMsg}>change msg</button>
            <button onClick={updateFname}>change name</button>
            {
                serverData.map((item)=>(
                    <div>
                        <h1>{item.username}</h1>
                        <p>{item.email}</p>
                        </div>
                ))
            }
            
        </div>
    )
}