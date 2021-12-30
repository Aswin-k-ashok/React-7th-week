import './header.css' 

import { Component } from 'react'  // this is for the class component methodolgy

function header(props){    // props is the value from the app.js file
    return(
    <div className="header">
        <h3>main header</h3>
        <h4>{props.lName}</h4>  
    </div>

    )
}

// //class componnet methedology


// class header extends Component{

//     render(){
//         return(<h1>hello i am son of {this.props.lName}</h1>)
//     }
// }






export default header   // exporting the function