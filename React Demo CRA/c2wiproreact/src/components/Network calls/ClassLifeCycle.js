import React from "react"

class ClassLifeCyle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            serverData:[]
        }
    }
    componentDidMount(){
      /*  setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{return res.json()}).then((res)=>this.setState({serverData:res})).catch((err)=>console.log(err))
          },3000)
          axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>console.log(res.data)).catch((err)=>console.log(err))*/
    }
  /*  callAPI=()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{return res.json()}).then((res)=>this.setState({serverData:res})).catch((err)=>console.log(err))
    }*/
    render(){
        console.log(this.state.serverData)
        return(
            <div>

                <h1>Class LifeCycle</h1>
              {/**   <button onClick={this.callAPI}>call API</button>*/}
          
                {this.state.serverData?this.state.serverData.map((item)=>(
                        <div>
                            <h2>{item.username}</h2>
                            <p>{item.email}</p>
                        </div>
                    )):<></>
                }
            </div>
        )
    }
}
export default ClassLifeCyle