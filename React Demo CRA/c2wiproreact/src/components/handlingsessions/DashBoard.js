import { useNavigate, useParams } from "react-router-dom"

export  function DashBoardComponent(){
   const navigate=useNavigate()
   const username=localStorage.getItem("globalusername")
    const handleSubmit=()=>{
        navigate("/search")
    }
    return(
        <div>
            <h3>Welcome {username}</h3>
           
            <button onClick={handleSubmit}>search</button>
        </div>

    )
}