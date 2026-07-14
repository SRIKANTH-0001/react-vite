import React, {Component} from "react"
import Child from "./Child"

//!1) Class based Component (CBC)

//?In CBC, "render" is mandatory

    // class App extends Component{

    //     render(){
    //         console.log(this);
    //         return <h2>CBC</h2>
    //     }
    // }
    // export default App

// Child(LHS) inherited Parent (RHS)

//i) Function based Component (FBC)

// const App=()=>{
//     return(
//         <div>
//             <h1>Say my Name:Srikanth K</h1>
//         </div>
//     )
// }

// export default App

//How to use one component inside another component?

const App=()=>{

    const name="SRIKANTH K";
    const age=21;

    return(
        <>
        <h1>I'm {name}</h1>
        <h3>My age is {21}</h3>

        <br /><p>Closing tag is needed in reactjs</p> 
        <p>from qspiders reactjs course</p>

        <label htmlFor="name">Name: </label>
        <input id="name" type="text" />
        </>
     
    )
}

export default App


