import { createContext, useState } from "react"
import Child from "./Child";

export const UserContext=createContext();

function App(){
    const [name,setName]=useState("SRIKANTH K");
    const fruits=["Apple","Banana","Grapes","Orange"]

    return(
        <>
            <UserContext.Provider value={fruits}>
                <div>
                    <h1>I'm executed from App component!...</h1>  
                    <br />
                    <h2>My Name is :- {name}</h2>  
                </div> 
                <Child/>
            </UserContext.Provider>
        </>
    )
}

export default App