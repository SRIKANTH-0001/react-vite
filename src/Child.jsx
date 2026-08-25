import React from "react";

const Child=(props)=>{

    const {pAddress:{city,state,place,street}}=props

    const changeColor=()=>{
    document.getElementById('container').style.backgroundColor="red";
    }

    const timer=()=>setTimeout(()=>{
        changeColor();
    },3000);

    return(
    <>
        <div id="container" style={{color:"white",fontSize:"17px",backgroundColor:"green"}}>
             <h1>My Persional Details!</h1>
            <ol>
                <li>City Name: {city}</li>
                <li>State Name: {state}</li>
                <li>More details: {place},{street}</li>
            </ol>
        </div>
        <br />
        <button  style={{color:"white",fontSize:"17px",backgroundColor:"green",height:"27px",width:"100px"}} onClick={()=>timer()}>Click Me</button>
        <br />
    </>
    )
}

export default Child;
