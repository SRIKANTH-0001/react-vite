import Child2 from "./Child2"

function Child(){
    return(
        <>
            <h1>I'm Executed from <strong>Child</strong> Component</h1>
            <br /><br />
            <Child2/>
        </>
    )
}

export default Child