import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import Customer from "./Customer";
import { useState } from "react";

function Info(name){
    const {firstname}=useParams();
    return(
        <>
            <div>
                <h2>Hello,{firstname}</h2>
                <br />
                <h3>Welcome to Our Application!....</h3>
            </div>
        </>
    )
}


function App(){

    return(
        <>
            <BrowserRouter>
                <Customer/>
                <Routes>
                    <Route path="/customer/:firstname" element={<Info/>}/>
                </Routes>
            </BrowserRouter>

        </>
    )
}


export default App;