import { useState } from "react"

export default function Count(){
const [count,setCount]=useState(0)
const handleAdd=()=>{
    const newCount =count+1;
    setCount(newCount);
}

const handleRemove=()=>{
    const update=count-1;
    setCount(update)
}

    return(
        <div style={{border:'2px solid green ',margin:'5px' , padding:'20px' }}>
       <h3>CounterX :{count} </h3>
       <button onClick={handleAdd} style= {{margin:'5px'}}>ADD</button>
       <button onClick={handleRemove} style= {{margin:'5px'}}>Reduce</button>
        </div>
    )
}


