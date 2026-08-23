import React from "react";

const Child=(props)=>{

    console.log(props);

    return(
        <div>
            <h1>i'm {props.pDetails.name} <span style={{backgroundColor:"blue"}}>
            And I'm {props.pDetails.age}</span> from {props.pDetails.address} <br />
            and my fav food is {props.pDetails.favFood} and My fav color is {props.pDetails.favColor} </h1>
        </div>
    )
}

export default Child;
