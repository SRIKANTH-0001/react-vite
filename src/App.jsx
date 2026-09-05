import { useState } from "react";

function App(){

    const [state,setState]=useState("red");
    const [favCarDetails,setFavCarDetails]=useState({
        name:"ford",
        price:"₹12 Lakh",
        color:"blue",
        type:"EV"
    });

    const changeName=()=>{
        setFavCarDetails((prev)=>{
            return {...prev,name:"Hundai"};
        })
    }

    return(
        <>
        <h1 style={{textAlign:"center",color:"blue"}}>Just Simple examples for UseState Hook</h1>
        <div style={{height:"300px",width:"300px",marginTop:"50px",marginLeft:"600px",backgroundColor:"lightgray",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}}>
            <h2 style={{textAlign:"center",color:"tomato"}}>{state}</h2>
            <button style={{cursor:"pointer",fontSize:"30px",height:"40px",width:"100px",backgroundColor:"red",color:"white",borderRadius:"8px"}} onClick={()=>setState("black")}>
                click
            </button>
        </div>
        <br />
        <div style={{backgroundColor:"lightgoldenrodyellow",height:"200px",width:"350px",marginLeft:"600px"}}>
            <h1>Favourite Car details!</h1><br />
            <ul style={{color:"rgb(62, 2, 6)",fontSize:"25px"}}>
                <li>Name of Car: {favCarDetails.name}</li>
                <li>Price of Car: {favCarDetails.price}</li>
                <li>Color of Car: {favCarDetails.color}</li>
                <li>Type of Car: {favCarDetails.type}</li>
            </ul>
            <br />
            <button onClick={()=>changeName()} style={{color:"seagreen",height:"30px",marginTop:"20px",backgroundColor:"ButtonShadow",fontSize:"18px",cursor:"pointer"}}>Click to view My second fav Car Name</button>
        </div>

        </>
    )
}

export default App