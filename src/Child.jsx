import React from "react";

const Child=(props)=>{

    console.log(props);
    

    const {person:{pname,age},address_Info:[state,city,situation]}=props;

    return(
        <div>
            <h1>i'm {pname} <span>And I'm {age}</span> from {city} and which is in {state} and I'm {situation} </h1>
        </div>
    )
}

export default Child;
