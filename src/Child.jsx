import React from "react";

const Child=(props)=>{

    console.log(props);

    return(
    <>
        <h1>My favourite Fruits!</h1>
        <ol>
            <li>{props.favFruits[0]}</li>
            <li>{props.favFruits[1]}</li>
            <li>{props.favFruits[2]}</li>
            <li>{props.favFruits[3]}</li>
        </ol>
    </>
    )
}

export default Child;
