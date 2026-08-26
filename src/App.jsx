import React, {Component} from "react"
import Head1 from "./Child"
import Header from "./modulecss/header"


const App=()=>{

    const shoot=(a,b)=>{
        alert(`You have used the gun Named ${a}. The shot you did was amzing!...`);
        confirm(b.type)
    }
    const mouseOver=(event)=>{
        alert(`Why did you put the cursor over Me!😡`);
        confirm(event.type)
    }


    return(
        <>
        <h1 onCopy={()=>alert('You copied Me!')}>Welcome to the Zooting game!</h1>
        <button onClick={(b)=>shoot("Ak74",b)}>Hit me to shoot!</button>
        <br />
        <br />
        <br />
        <br /><br /><br />
        <h1 style={{backgroundColor:"pink",position:"absolute"}}  onMouseOver={(event)=>mouseOver(event)}>Put the Arrow over Me!</h1>
        </>
    )
}

export default App;