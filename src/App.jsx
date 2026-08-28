import { useState } from "react";

function MyForm(){

    const [myText,setMyText]=useState("");

    const handleChange=(e)=>{
        setMyText(e.target.value);
    }

    const handleClick=()=>{
        alert(`Here is the Given Story!..\n\n ${myText}`)
    }

    return(
        <>
           <h1>Tell me One Random Story or any Interesting Story About you!...😊</h1>
           <br /><br />

            <label >Write here : </label><br />
           <textarea name="textarea" value={myText} onChange={handleChange}></textarea>

            <br />
            <button onClick={handleClick}>Done</button>
        </>
    )
}

export default MyForm;