import { useEffect, useRef, useState } from "react";

function App(){

    const [inputVal, setInputVal] = useState("");

    const count=useRef(0);

    useEffect(()=>{
        count.current=count.current+1;
    })

    const input=useRef();

    const handleClick=()=>{
        input.current.focus();
    }


    return(
        <>
            <label >Enter any Number : 
                <input
                    type="number" 
                    value={inputVal}
                    onChange={(e)=>setInputVal(e.target.value)}
                />
            </label>
            <br />
            <br />
            <label >Enter Your age : 
                <input type="number" ref={input}/>
            </label><br /><br />

            <button onClick={()=>handleClick()}>Focus</button>
            <h3>State updates: {count.current}</h3>
            <p>Type in the input to trigger a re-render.</p>
        </>
    )
}

export default App;