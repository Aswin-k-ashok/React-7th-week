import './App.css'
import Header from './components/header'  // gettin the imported component form components folder

function App(){
  const lName="ashok"
return(
 <div>
   <Header lName = {lName}/>
   <h1 style={{color:"red"}}>hello there</h1>
   <Comp1/>
   <p style={{backgroundColor:"blue"}}>aswin {lName}</p>
   <Comp2/>
   <h3 className='purple'>wakanda forever</h3>
 </div>
);

}
 
export default App;



function Comp1(){   //foreign component
  return(
    <p style={{color:"grey"}}> i am </p>
    )
}

function Comp2(){
  return(

    <p>i'm a fan of black panther</p>
    )
}

console.log("this is that is wihch is who is",Header);