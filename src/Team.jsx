import { useState } from "react"

export default function Team(){
  const [team,setTeam]=useState(11)

const teamStyle={
    border:'2px solid green ',
    margin:'5px' ,
    padding:'20px'
}

  const add=()=>{
    const addNumber=team + 1
    setTeam(addNumber)
  }
 const remove=()=>{
    const removeNumber =team-1;
    setTeam(removeNumber)
 }

    return(
          <div style={teamStyle}>
            <h3>Player :{team} </h3>
            <button onClick={add} style= {{margin:'5px'}}>ADD</button>
            <button onClick={remove} style= {{margin:'5px'}}>REMOVE</button>
          </div>
    )
}