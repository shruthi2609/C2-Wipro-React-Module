import axios from "axios"
import { useEffect,useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
const DashBoard=()=>{
    const {email}=useParams()
    const navigate=useNavigate()
    const [response,setReponse]=useState({})
    useEffect(
        ()=>{
            axios.get(`http://localhost:3001/getUser/${email}`).then((res)=>setReponse(res.data)).catch((err)=>console.log(err))
        }
    ,[])
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate("/updatepassword")
    }
    return(
        <div>
            <h1>Welcome {response.email}</h1>
            <h2> Designation :{response.role}</h2>
            <p>Country:{response.country}</p>
            <button onClick={(e)=>handleSubmit(e)}>update password</button>
        </div>
    )
}
export default DashBoard