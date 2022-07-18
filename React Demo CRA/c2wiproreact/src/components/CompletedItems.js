 const CompeletedItems=(props)=>{
    /*console.log("this is props",props.deleteFun)*/
    const styleobj={
        backgroundColor:"aqua"
    }
    return(
        <div style={styleobj}>
            <h3>Completed Tasks list</h3>
            {
                props.tododata.map((item)=>{
                    return item.completed&&<div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    <button onClick={()=>props.deleteFun(item.id)}>delete</button>
                        </div>
                })
            }
        </div>
    )
}
export default CompeletedItems