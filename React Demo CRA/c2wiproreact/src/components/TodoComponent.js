import React from "react"
export default class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todoData:[
                {
                    title:"buy eggs",
                    text:"buy 12 eggs"
                }
            ],
            todoTitle:"",
            todoText:""
        }
    }
    addItem=()=>{
        this.setState({todoData:[...this.state.todoData,{
            title:this.state.todoTitle,
            text:"build the app by this weekend"
        }]})
    }
    handleTitle=(ev)=>{
        console.log(ev.target.value)
        this.setState({todoTitle:ev.target.value})
    }
    render(){
      
        return(
            
            <div>
               Title: <input type="text" onChange={(e)=>this.handleTitle(e)}></input>
               Enter Description: <input type="text"></input>
                <button onClick={this.addItem}>addItem</button>
                {
                    this.state.todoData.map((item)=>(
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}