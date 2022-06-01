import { useState } from "react"

export default function CounterComponent(){
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    return(
        <div>
            <button onClick={increment}>+</button>
            <p data-testid="counter">{count}</p>
            <button onClick={decrement}>-</button>
        </div>

    )
}