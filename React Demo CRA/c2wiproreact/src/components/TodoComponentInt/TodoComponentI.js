import { useEffect, useState } from "react"
import axios from "axios"
import CompeletedItems from "../CompletedItems"
const TodoComponentI=()=>{
    const [text,setText]=useState("")
    const [title,setTitle]=useState("")
    const [id,setId]=useState(0)
    const [data,setData]=useState([])
    useEffect(
        ()=>{
            axios.get("http://localhost:8000/todo/get-tasks").then((res)=>setData(res.data)).catch((err)=>console.log(err))
        },[data]
    )
    const handleChange=(e,tag)=>{
        if(tag==="text"){
            setText(e.target.value)
        }
        if(tag==="title"){
            setTitle(e.target.value)
        }
    }
    const addItem=(e)=>{
        e.preventDefault()
        setId(id+1)
        axios.post("http://localhost:8000/todo/create",{
        id:id,
        text:text,
        title:title,
        completed:false
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>console.log(err))

    }
    const changeCompletion=(itemid)=>{
        axios.get(`http://localhost:8000/todo/done-task/${itemid}`).then((res)=>{
            const temp=[...data]
            const obj= temp.find((item)=>item.id===itemid)
            obj.completed=!obj.completed
            setData(temp)
        }).catch((err)=>console.log(err))
    }
    const deleteTask=(itemid)=>{
        axios.get(`http://localhost:8000/todo/delete-task/${itemid}`).then((res)=>{
            const temp=[...data]
            const obj= temp.filter((item)=>item.id!==itemid)
            setData(obj)
        }).catch((err)=>console.log(err))
    }
    return(
      
        <div>
           
            <h1>Todo Component</h1>
           Title: <input type="text" onChange={(e)=>handleChange(e,"title")}></input>
            Text:<input type="text" onChange={(e)=>handleChange(e,"text")}></input>
            <button onClick={(e)=>addItem(e)}>add</button>
            {
                data.map((item)=>(
                
                    <div>
                        {item.completed?<></>:
                        <div>
                        <h1>{item.title}</h1>
                        <p>{item.text}</p>
                        <button onClick={()=>changeCompletion(item.id)}>done</button>
                        </div>
                     }
                    </div>
                ))
            }
            <CompeletedItems tododata={data} deleteFun={deleteTask}></CompeletedItems>
        </div>
    )
}
export default TodoComponentI