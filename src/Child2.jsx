import { useContext } from "react"
import { UserContext } from "./App";

function Child2(){

    const user=useContext(UserContext);

    return(
        <>
            <h1>My Favourite fruits are :- <br />{user.join(",")}</h1><br />
            <p>I'm executed from Child2 Component</p>
        </>
    )
}

export default Child2