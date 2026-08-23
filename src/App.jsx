import React, {Component} from "react"
import Head1 from "./Child"
import Header from "./modulecss/header"

const App=(args)=>{

    console.log(args);

    let personalDetails={
        name:"Srikanth",
        age:21,
        address:"Chennai",
        favColor:"Blue",
        favFood:"Hot curd rice"
    }

    return(
        <>
            <Head1 pDetails={personalDetails}/>
            <br />

            <ul>
                <li>I'm having the Briefs and the brand is {args.brand}</li>
                <li>The size of it is {args.size} and the it's color is {args.color}</li>
            </ul>

        </>
     
    )
}

export default App


