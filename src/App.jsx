import React, {Component} from "react"
import Child from "./Child"

const App=()=>{

    const design={
            color:"red",
            backgroundColor:"pink",
            width:"30%",
            height:"30%"
        }

    return(
        
        <>
            <h1 style={{color:"blue",backgroundColor:"yellow"}}>I'm Srikanth</h1>
            <button style={design}>Click Me!</button>
        </>
     
    )
}

export default App


