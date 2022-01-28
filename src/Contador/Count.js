import React, { useState } from "react";

const Cont =()=>{
    const [counter, setcounter]=useState(0)

    const incrementar = ()=>setcounter(counter+1)
    const decrementar = ()=>setcounter(counter-1)

    return(
        <div className="app">
            <h1>{counter}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default Cont