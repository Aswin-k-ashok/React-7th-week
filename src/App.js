import React from 'react'

import Employee from './components/Employee'

function App() {

 let emp =[
    {name:'aswin',age:'22'},
    {name:'akhil',age:'23'},
    {name:'anandu',age:'24'}
  ]
  

  // return(             // passing component using object destructuring
  //   <div>
  //     {
  //       emp.map((obj,index)=>  // removing braces will help to return the value without returning keyword
  //         (
  //           <Employee key={index} {...obj} />
  //         )
  //       )
  //     }
  //   </div>
  // )
  //   }

  return (                   // component from Employee.jsx
    <div className='App'>
      {
        emp.map((obj,index)=>{
          return(

            <Employee key={index} name={obj.name} age={obj.age}/>
            )
        })
      }
    </div>
  )
}

// function Employee(props){   // component inside the app folder

//   return(
//     <div>
//       <h1>Name:{props.name} , age:{props.age}</h1>
//     </div>
//   )

// }

export default App