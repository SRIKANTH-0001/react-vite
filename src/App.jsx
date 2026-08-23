import React, {Component} from "react"
import Head1 from "./Child"
import Header from "./modulecss/header"

const App=()=>{

    const state="Chennai";
    const city="Sholinganallur";
    const situation ="fine";

    return(
        <>
            <Head1 person={{pname:"SRIKANTH",age:21}} address_Info={[state,city,situation]}/>
        </>
     
    )
}

export default App


