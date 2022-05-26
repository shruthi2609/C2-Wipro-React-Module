import { useNavigate,Navigate } from "react-router-dom"
export default function HomePage(){
    const navigate=useNavigate()
    const handleSubmit=()=>{
        navigate("/signup")
     
      /* return <Navigate to="/signup" replace></Navigate>*/
    }
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={handleSubmit}>Signup</button>
        </div>

    )
}