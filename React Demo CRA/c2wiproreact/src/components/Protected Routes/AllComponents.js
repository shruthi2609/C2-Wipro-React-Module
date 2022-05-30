import { Link } from "react-router-dom"

export const Navigation=()=>{
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/admin">admin</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    )
}


export const Home=()=>{
    return(
        <div>
            <h1>Home Page : unprotected</h1>
        </div>
    )
}

export const Admin=(props)=>{
    if(props.user){
        return(
            <div>
                <h1>Admin Page : some confidential data</h1>
            </div>
        )
    }
    else{
        return <h1>Please login with proper credentials</h1>
    }
    
}
export const Contact=()=>{
    return(
        <div>
            <h1>Contact Page : unprotected</h1>
        </div>
    )
}