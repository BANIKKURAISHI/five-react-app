import { useEffect, useState } from "react"
import Friends from "./friend";
export default function Friend(friend){
  const [first,setFirst] =useState([]);
  useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')   
        .then(res=>res.json()) 
        .then(data=>setFirst(data))  


  },[])

  const auto ={
    border:'2px solid green',
    padding:'20px',
    color:'red'
    


   
  }
    return(
     
        <div  style={auto}>
            <h2>Friends :{first.length} update :{setFirst.length}</h2>
            {
        first.map(first=><Friends first={first}></Friends>)
    }
            <h4></h4>
           
        </div>
    )
}