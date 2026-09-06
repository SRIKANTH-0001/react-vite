import { useState } from "react"

function Component1(){

    const [name,setName]=useState("SRIKANTH");

    return(
        <>
            <h1>My Name is {name}</h1>
            <p>I Executed from C1</p>
            <br />
            <Component2 name={name}/>
        </>
    )
}
function Component2({name}){
    return(
        <>
            <h1>Again,I'm {name}</h1>
            <p>I Executed from C2</p>
            <br />
            <Component3 name={name}/>
        </>
    )
}

function Component3({name}){
    return(
        <>
            <h1>So,Yeah I'm {name}</h1>
            <p>I Executed from C3</p>
        </>
    )
}

export default Component1