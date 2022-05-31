import { useNavigate, useSearchParams } from "react-router-dom"

export default function SearchComponent(){
   const username=localStorage.getItem("globalusername")
   const navigate=useNavigate()
   const handleLogout=()=>{
       localStorage.removeItem("globalusername")
        navigate("/")
   }
    return(
        <div>
            <button onClick={handleLogout}>logout</button>
            <h1>Welcome {username}</h1>
         enter text: <input type="text"></input>
         <button>search</button>
        </div>

    )
}

