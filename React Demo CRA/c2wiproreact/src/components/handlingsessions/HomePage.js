import { useNavigate,Navigate } from "react-router-dom"
export default function HomePageComponent(){
    const navigate=useNavigate()
    const handleSubmit=()=>{
        navigate("/signin")
     
      /* return <Navigate to="/signup" replace></Navigate>*/
    }
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={handleSubmit}>Signin</button>
        </div>

    )
}