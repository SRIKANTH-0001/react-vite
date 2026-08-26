import React, {Component} from "react"
import Head1 from "./Child"
import Header from "./modulecss/header"

function Son(props){
    return(
        <div style={{backgroundColor:"lightblue"}}>
            <h1>I'm the Son Component</h1>
            <h2>{props.children}</h2>
        </div>
    )
}

function Daughter(props){
    return(
        <div style={{backgroundColor:"pink"}}>
            <h1>I'm the Daughter Component</h1>
            <h2>{props.children}</h2>
        </div>
    )
}

function Parent(props){
    return(
        <>
            <h1>I'm the Parent of those Son and Daughter Component!...</h1>
            <br />
            <br />
            <Son>
                <h3>I was written in the parent Component,But it seems like it's in <b>Son</b> Component.</h3>
                <br />
            </Son>
            <br />

            <Daughter>
                <h3>I was also written in the parent Component,But it seems like it's in <b>Daughter</b> Component.</h3>
                <br />
            </Daughter>
            <br />

            <ol style={{fontSize:"24px"}}>
                <h1>The available brief details!...</h1>
                <li>{props.brand}</li>
                <li>{props.size}</li>
                <li>{props.color}</li>
            </ol>
        </>
    )
}

export default Parent;


