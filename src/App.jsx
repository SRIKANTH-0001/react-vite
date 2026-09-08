import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

function App(){

    const [data]=useFetch("https://jsonplaceholder.typicode.com/todos");


    return(
    <>
        <div>
            {data && data.map((info)=>(
                <p key={info.id}>{info.title}</p>
            ))}
        </div>

    </>
    )
}
export default App;
