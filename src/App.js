import React from 'react'
import SampleComponent from './components/SampleComponent'
import { useState } from 'react'

function App() {
  const[state,setState] = useState(false)       
  return (
    <div className="App">
      <button onClick={()=>{
        return(
          setState(!state)
        )
      }}>toggle</button>

      {/* {state ? <SampleComponent/> : null} */}
      {state && <SampleComponent/>}     

    </div>
  )
}

export default App
