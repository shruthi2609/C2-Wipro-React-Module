import { useSearchParams } from "react-router-dom"

export default function SearchComponent(){
   const [query]=useSearchParams()
  const country=query.get("place")
  const email=query.get("email")
    return(
        <div>
            <h1>You have searched for {country}{email}</h1>
        </div>

    )
}

