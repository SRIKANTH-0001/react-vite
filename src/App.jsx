import { useState } from "react"

function Counter(){
    const [count,setCount]=useState(0);

    const incCounter=()=>{
        setCount(count+1);
    }

    const decCounter=()=>{
        if(count>0){
            setCount(count-1);
        }
        
    }
    const resetCounter=()=>{
        const res=0;
        setCount(res);
    }

    return(
        <>
            <div style={{backgroundColor:"orange",height:"250px"}}></div>
            <div style={{backgroundColor:"white"}}>
                <h1 style={{textAlign:"center",color:"blue",fontSize:"150px"}}>{count}</h1>

                <button style={{backgroundColor:"green",color:"white",height:"33px",width:"80px",marginRight:"15px",marginLeft:"42%",fontSize:"25px"}} onClick={()=>incCounter()}>+</button>
                <button style={{backgroundColor:"red",color:"white",height:"33px",width:"80px",marginRight:"15px",fontSize:"25px"}} onClick={()=>decCounter()}>-</button>
                <button style={{backgroundColor:"lightsteelblue",color:"white",height:"33px",width:"80px",marginRight:"10px",fontSize:"25px"}} onClick={()=>resetCounter()}>Reset</button>
            </div>
            <div style={{backgroundColor:"green",height:"500vh",marginTop:"10px"}}></div>
        </>
    )
}

export default Counter