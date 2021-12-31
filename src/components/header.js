import { useState } from "react"

function Header(){
    let navCol
    const [col,setCol] =useState("red")
    
    return(
        <div>
            <h1 style={{color :{col}}}>header</h1>
            <button onClick={()=>{
                col = setCol("red")
                console.log(col)
            }}>change color</button>
        </div>
    )

}

export default Header