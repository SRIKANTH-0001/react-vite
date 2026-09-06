import { useEffect, useState } from "react"
import './style.css'

function App(){

    const [count,setCount]=useState(0);

    useEffect(()=>{
       const timer= setTimeout(()=>{
            setCount((count)=>count+1);
        },1000);
        
        return ()=>clearTimeout(timer)

    },[]);


    return(
        <>
            <h1 style={{textAlign:"center",fontSize:"123px"}}>{count}</h1>
            <br /><br />
            <div style={{borderRadius:"10px",height:"100px",width:"550px",backgroundColor:"AccentColor",display:"flex",justifyContent:"space-evenly",alignItems:"center",margin:"0",marginLeft:"550px"}}>
                <button style={{backgroundColor:"green"}} onClick={()=>setCount(count+1)}>+</button>
                <button style={{backgroundColor:"red"}} onClick={()=>count>0?setCount(count-1):""}>-</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>setCount(0)}>Reset</button>
            </div>

        </>
    )
}

export default App