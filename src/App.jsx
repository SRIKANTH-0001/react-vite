import React, {Component} from "react"
import Child from "./Child"
import Header from "./modulecss/header"

const App=()=>{

    const address={state:"Chennai",city:"Sholinganallur"};

    return(
        <>
            <Child person={{pname:"SRIKANTH",age:21}} address_Info={address}/>
        </>
     
    )
}

export default App


