import { useMemo, useState } from "react";

const expensiveCalculation=(num)=>{
    console.log("Calculation is Started!...");

    for(let i=0;i<1000000000;i++){
        num+=1;
    }
    return num;
}

function App(){

    const [count,setCount]=useState(0);
    const [todo,setToDo]=useState([]);


    //With useMemo Hook - Memoising the result of expensiveCalculation function 
    const calculation=useMemo(()=>expensiveCalculation(count),[count]);
    
    //Without useMemo

    // const calculation=expensiveCalculation(count);

    const handleClick=()=>{
        setToDo((prev)=>{
            return [...prev,"New Todo is Added!"];
        })
    }

    const handleClickInc=()=>{
        setCount((c)=>c+1);
    }


    return(
        <>
            <div>
                {todo.map((item,index)=>{
                    return <h3 key={index}>{item}</h3>
                })}
                <br /><br />
                <button onClick={()=>handleClick()}>Add ToDo</button>
            </div>
            <br /><br />
            <div>
                <h2>Count : {count}</h2>
                <br />
                <button onClick={()=>handleClickInc()}>Inc Count</button>
            </div>
            <div>
                <h2>Expensive calculation!</h2>
                <br />
                <h4>{calculation}</h4>
            </div>

        </>
    )
}

export default App;