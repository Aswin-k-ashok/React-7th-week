import { useState } from "react";
import Header from "./components/header";
import Counter from "./Counter";

function App() {

  const [count,setCount] = useState(1)
  const [condition,setCondition] = useState("orange")
  const [count2,setCount2] = useState(0)
  let cond

  let addcount = ()=>{
    count = setCount(count+1)
  } 

  let conditionChange = ()=>{
    if(condition=="orange"){
   condition = setCondition("mango")
    
    
    }else{
     condition = setCondition("orange")
    }
    console.log(condition)
  }

  return(
    <div>
      <Header/>
      <div style={{background:"yellow"}}>
      <h1>{count}</h1>
      <button onClick={addcount}>add</button>
      <Counter count={count} title= {"the count you see is imported from App.js" }/>
      </div>

      <h1>{condition}</h1>
      <button onClick={conditionChange}>change conditionn</button>
      <h1>{count2}</h1>
      <button onClick={()=>{count2=setCount2(count2+1)}}>set count 2</button>


    </div>

  )

}

export default App;
