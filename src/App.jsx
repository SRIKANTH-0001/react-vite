import { useState } from "react"

function Dropdown(){

    const [val,setVal]=useState("");

    const handleChange=(e)=>{
        setVal(e.target.value);
    }


    return(
        <>
            <label >Choose you favourite Film in Marvel</label>
            <br />
            <br />
            <select onChange={handleChange}>
                <option value="Iron Man">Iron Man</option>
                <option value="Spider Man">Spider Man</option>
                <option value="Doctor Strange">Doctor Strange</option>
                <option value="None" selected>Others</option>
            </select>

            <br /><br />

            <button onClick={()=>alert(`Oh!You have selected your fav Film as ${val}`)}>Done!</button>
        </>
    )
}

export default Dropdown
