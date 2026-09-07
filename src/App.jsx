import React, { useCallback, useState } from "react";

const Button=React.memo(({onClick,text})=>{
    alert(`The button ${text} is Rendered!`);
    return <button onClick={onClick}>{text}</button>
});

function App(){

    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
    
    //This concept does the rendering 2 time even i clicked one time on btn1

    // const handleClick1=()=>{
    //     setCount1(count1+1);
    // }
    // const handleClick2=()=>{
    //     setCount2(count2+1);
    // }

    //this is how to use useCallBack

    const handleClick1=useCallback(()=>{
        setCount1(count1+1);
    },[count1]);

    const handleClick2=useCallback(()=>{
        setCount2(count2+1);
    },[count2]);
    
    alert("Parent Rendered!");

    return(
        <>
            <h1>Count1 : {count1}</h1>
            <h1>Count2 : {count2}</h1>
            
            <Button onClick={handleClick1} text="Button 1" />
            <Button onClick={handleClick2} text="Button 2" />
        </>
    )
}

export default App;