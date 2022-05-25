import React,{ChangeEvent, FC, useState} from "react"
import ITodo from "./todoInterface"
const App:FC=()=>{
const [id,setId]=useState<number>(0)
const [todoText,setText]=useState<string>("")
const [todoTitle,setTitle]=useState<string>("")
const [todoData,setTodoData]=useState<ITodo[]>([])
const handleText=(e:ChangeEvent<HTMLInputElement>):void=>{
setText(e.target.value)
}
const handleTitle=(e:ChangeEvent<HTMLInputElement>):void=>{
setTitle(e.target.value)
}
const addItem=():void=>{
setId(id+1)
const obj={id:id,todoText:todoText,todoTitle:todoTitle}
setTodoData([...todoData,obj])
}
const deleteTask=(itemid:number):void=>{
const temp=[...todoData]
const result=temp.filter((item)=>item.id!==itemid)
setTodoData(result)
}
return(
  <div>
    TodoText:<input type='text' onChange={(e)=>handleText(e)}></input>
    TodoTitle:<input type='text' onChange={(e)=>handleTitle(e)}></input>
    <button onClick={addItem}>add task</button>
    {
      todoData.map((item:ITodo)=>(
        <div>
          <h3>{item.todoTitle}</h3>
          <h2>{item.todoText}</h2>
          <button onClick={()=>deleteTask(item.id)}>delete</button>
          </div>
      ))
    }
  </div>
)






}
export default App