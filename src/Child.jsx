import React from "react";

const Child=(props)=>{
    console.log(props);
    

    const {person:{pname,age},address_Info:{state,city}}=props;

    return(
        <div>
            <h1>i'm {pname} <span>And I'm {age}</span> from {city} and which is in {state} </h1>
        </div>
    )
}

export default Child