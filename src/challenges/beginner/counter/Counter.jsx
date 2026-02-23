import { useState } from "react"

export default function Counter({initialValue, min = 0, max = Infinity}){
  
    const [count, setCount] = useState(initialValue);

    function increment(){
        if(count >= max) return;
        setCount(prev => prev + 1)
    }
    function decrement(){
        if(count <= min) return;
        setCount(prev => prev - 1)
    }
    function reset(){
        setCount(initialValue)
    }

    console.log(count);
    
    return(
        <div>
            <h2 className="text-3xl text-center">{count}</h2>
            <ul className="flex gap-4 mt-4">
                <li>
                    <button disabled={count >= max} className="text-xl border px-2 disabled:opacity-60" onClick={increment}>+</button>
                </li>
                <li>
                    <button disabled={count <= min} className="text-xl border px-2 disabled:opacity-60"  onClick={decrement}>-</button>
                </li>
                <li>
                    <button className="text-xl border px-2" onClick={reset}>{initialValue}</button>
                </li>
            </ul>
        </div>
    )
}