import React from "react"

function AppComponent(props){
    console.log(props)
    return(
        <div>
        <h1>Username:{props.fname}</h1>
        <h2>React Configuration</h2>
        </div>
    )
}
export default AppComponent