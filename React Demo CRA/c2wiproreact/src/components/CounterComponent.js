import { useState } from "react";

export default function Counter(){
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        } 
    }
    return(
        <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
        </div>

    )
}
