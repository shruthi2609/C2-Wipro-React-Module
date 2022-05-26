import { useNavigate, useParams } from "react-router-dom"

export  function DashBoard(){
    const {username,email,country}=useParams()
    const navigate=useNavigate()
    const handleSubmit=()=>{
        navigate(`/search?place=${country}&email=${email}`)
    }
    return(
        <div>
            <h3>Welcome {username}!</h3>
            <h4>User Email :{email}</h4>
            <p>From :{country}</p>
            <button onClick={handleSubmit}>search</button>
        </div>

    )
}