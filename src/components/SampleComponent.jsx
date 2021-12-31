import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function SampleComponent() {
    useEffect(()=>{
        console.log("mounting.....")
        return()=>{
            console.log("....unmounting")  // works when we remove a function 
        }
    })
    const [state,setState] = useState(0)
    return (
        <div>
            <h1>hello world {state}</h1>
            <button onClick={()=> setState (state+1)}>increment</button>
        </div>
    )
}

export default SampleComponent
