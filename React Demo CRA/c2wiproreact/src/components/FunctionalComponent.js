import { useState } from "react"

const FunctionalComponent=()=>{
    const [id,setId]=useState(0)
    const [todoData,setTodoData]=useState([])
    const [todoTitle,setTitle]=useState("")
    
    const addItem=()=>{
        setId(id+1)
       setTodoData([...todoData,{id:id,todoTitle:todoTitle}])
    }
    return(
        <div>
            {count}
            <button onClick={increment}>+</button>
        </div>
    )
}