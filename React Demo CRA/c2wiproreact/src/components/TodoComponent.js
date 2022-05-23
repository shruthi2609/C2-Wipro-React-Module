import React from "react"
import CompeletedItems from "./CompletedItems"
export default class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todoData:[],
            todoTitle:"",
            todoText:"",
            todoid:0
        }
    }
    addItem=()=>{
        this.setState({todoid:this.state.todoid+1})
        this.setState({todoData:[...this.state.todoData,{
            id:this.state.todoid,
            title:this.state.todoTitle,
            text:this.state.todoText,
            completed:false
        }]})
    }
    handleTitle=(ev)=>{
      
        this.setState({todoTitle:ev.target.value})
    }
    handleText=(ev)=>{
       
        this.setState({todoText:ev.target.value})
    }
    changeCompletion=(itemid)=>{
    const temp=[...this.state.todoData]
     const obj= temp.find((item)=>item.id===itemid)
     obj.completed=!obj.completed
     this.setState({todoData:temp})
    }
    deleteTask=(itemid)=>{
        const temp=[...this.state.todoData]
        const result=temp.filter((item)=>item.id!==itemid)
        this.setState({todoData:result})
    }
    render(){
        const styleobj={
            backgroundColor:"grey"
        }
      console.log(this.state.todoData)
        return(
            <div>
               Title: <input type="text" onChange={(e)=>this.handleTitle(e)}></input>
               Enter Description: <input type="text" onChange={(e)=>this.handleText(e)}></input>
                <button onClick={this.addItem}>addItem</button>
                <div style={styleobj}>
                <h3>Pending Items</h3>
                {
                    this.state.todoData.map((item)=>(
                        item.completed?<></>:
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                         <button onClick={()=>this.changeCompletion(item.id)}>done</button>
                         <button onClick={()=>this.deleteTask(item.id)}>delete</button>
                        </div>
                    ))
                }
                </div>
                <CompeletedItems tododata={this.state.todoData} deleteFun={this.deleteTask}></CompeletedItems>

            </div>
        )
    }
}