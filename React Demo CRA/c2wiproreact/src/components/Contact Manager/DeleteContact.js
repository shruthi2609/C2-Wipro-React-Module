import axios from "axios"
import { useEffect ,useState} from "react"
import { useNavigate, useParams } from "react-router-dom"

/* approach 1: logic in root component
export default function DeleteContact(){
    const {username}=useParams()
   const navigate= useNavigate()
    const handleSubmit=()=>{
        navigate("/")
    }
    return(
        <div>
            <h2>{username} has been deleted</h2>
            <button onClick={handleSubmit}>go back</button>
        </div>
    )
}

approach 2: logic on delete contact compo*/
export default function DeleteContact(){
    const {userid}=useParams()
   const navigate= useNavigate()
   const [message,setMessage]=useState("")
   useEffect(()=>{
    axios.delete(`http://localhost:3001/empDetails/${userid}`).then((res)=>setMessage("user is deleted")).catch((err)=>setMessage("user id does not exists"))
   },[])
    const handleSubmit=()=>{
        navigate("/")
    }
    return(
        <div>
            <h2>{message}</h2>
            <button onClick={handleSubmit}>go back</button>
        </div>
    )
}


