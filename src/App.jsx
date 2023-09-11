import './App.css'
import Count from './count'
import count from './count'
import Team from './Team'
import Users from './Use'
import Friend from './friends'

function App() {
   
     function Button(){
      alert('Learn carefully ')
     }

     const Button2=()=>{
      alert(' It is time to Learn carefully ')
     }

     const Five=(num)=>{
      alert(num+5)
     }
   
  return (
    <>
      <h1>Welcome</h1>


      <h4>This is react core concept</h4>
      <Friend></Friend>

      <Users></Users>
      <button onClick={Button}>Button</button>
      <button onClick={Button2}>Button2</button>
      <button onClick={()=>alert('this is third way to active button')}>Button3</button>
      <button onClick={()=>Five(3)}>Button4</button>
      <Count></Count>
     <Team></Team>
    
    </>
  )
}

export default App
