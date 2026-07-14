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
    return(
        <>
        <h1>I'm Srikanth</h1>
        <p>from qspiders reactjs course</p>
        </>
     
    )
}

export default App


